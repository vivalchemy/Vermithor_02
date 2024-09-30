package com.example.almaconnect.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.rememberVectorPainter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.example.almaconnect.R

data class Alumni(
    val name: String,
    val designation: String,
    val graduationYear: Int,
    val avatarUrl: String
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ChatLauncherScreen() {
    var searchQuery by remember { mutableStateOf("") }
    val allAlumni = remember {
        listOf(
            Alumni("John Doe", "Software Engineer", 2024, "https://example.com/avatar1.jpg"),
            Alumni("Jane Smith", "Data Scientist", 2024, "https://example.com/avatar2.jpg"),
            Alumni("Alex Johnson", "Product Manager", 2024, "https://example.com/avatar3.jpg"),
            Alumni("John Doe", "Software Engineer", 2024, "https://example.com/avatar1.jpg"),
            Alumni("Jane Smith", "Data Scientist", 2024, "https://example.com/avatar2.jpg"),
            Alumni("Alex Johnson", "Product Manager", 2024, "https://example.com/avatar3.jpg"),
            // Add more alumni here
        )
    }
    val filteredAlumni = allAlumni.filter {
        it.name.contains(searchQuery, ignoreCase = true) ||
                it.designation.contains(searchQuery, ignoreCase = true)
    }

    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(8.dp)
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text(
                    text = "Join Forem",
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "52 Online Total 2345",
                    fontSize = 14.sp
                )
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = searchQuery,
            onValueChange = { searchQuery = it },
            modifier = Modifier.fillMaxWidth(),
            placeholder = { Text("Search") },
            trailingIcon = {
                Icon(Icons.Default.Search, contentDescription = "Search")
            }
        )

        Spacer(modifier = Modifier.height(16.dp))

        LazyColumn(
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            items(filteredAlumni) { alumni ->
                AlumniCard(alumni)
            }
        }
    }
}

@Composable
fun AlumniCard(alumni: Alumni) {
    val context = LocalContext.current
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(8.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            AsyncImage(
                model = ImageRequest.Builder(context)
                    .data(alumni.avatarUrl)
                    .crossfade(true)
                    .placeholder(R.drawable.baseline_person_24)
                    .error(R.drawable.baseline_person_24)
                    .build(),
                contentDescription = "Alumni Avatar",
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .size(48.dp)
                    .clip(RoundedCornerShape(8.dp))
            )
            Spacer(modifier = Modifier.width(16.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(text = alumni.name, fontWeight = FontWeight.Bold)
                Text(text = alumni.designation)
                Text(text = "Graduation Year: ${alumni.graduationYear}")
            }
            Button(
                onClick = { /* TODO: Implement connect functionality */ }
            ) {
                Text("Connect")
            }
        }
    }
}