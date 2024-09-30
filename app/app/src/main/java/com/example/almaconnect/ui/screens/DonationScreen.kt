package com.example.almaconnect.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Description
import androidx.compose.material.icons.filled.Search
import androidx.compose.ui.platform.LocalContext
import coil.request.ImageRequest
import com.example.almaconnect.R

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DonationScreen() {
    var searchQuery by remember { mutableStateOf("") }
    val selectedCategory by remember { mutableStateOf("Tech") }

    Column(modifier = Modifier.fillMaxSize()) {
        // Search bar
        OutlinedTextField(
            value = searchQuery,
            onValueChange = { searchQuery = it },
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            placeholder = { Text("Search") },
            trailingIcon = { Icon(Icons.Default.Search, contentDescription = "Search") },
            singleLine = true
        )

        // Category dropdown
        ExposedDropdownMenuBox(
            expanded = false,
            onExpandedChange = { /* Handle expansion */ },
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp)
        ) {
            TextField(
                value = selectedCategory,
                onValueChange = {},
                readOnly = true,
                trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = false) },
                modifier = Modifier.menuAnchor().padding(vertical = 16.dp)
            )
        }

        // Project list
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 16.dp)
        ) {
            items(generateDummyProjects()) { project ->
                ProjectItem(project)
                Spacer(modifier = Modifier.height(8.dp))
            }
        }
    }
}

@Composable
fun ProjectItem(project: Project) {
    val context = LocalContext.current
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(8.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(60.dp)
                    .clip(RoundedCornerShape(8.dp))
                    .background(MaterialTheme.colorScheme.secondaryContainer),
                contentAlignment = Alignment.Center
            ) {
                AsyncImage(
                    model = ImageRequest.Builder(context)
                        .data(project.imageUrl)
                        .crossfade(true)
                        .placeholder(R.drawable.baseline_work_24)
                        .error(R.drawable.baseline_person_24)
                        .build(),
                    contentDescription = "Project Image",
                    contentScale = ContentScale.Crop,
                    modifier = Modifier
                        .size(48.dp)
                        .clip(RoundedCornerShape(8.dp))
                )
            }
            Spacer(modifier = Modifier.width(16.dp))
            Column {
                Text(text = project.name, fontWeight = FontWeight.Bold, fontSize = 18.sp)
                Text(text = project.description, fontSize = 14.sp)
            }
        }
    }
}

data class Project(val name: String, val description: String, val imageUrl: String?)

fun generateDummyProjects(): List<Project> {
    return List(5) { index ->
        Project(
            name = "Project Name ${index + 1}",
            description = "Short project description ${index + 1}",
            imageUrl = null // Replace with actual URLs when available
        )
    }
}