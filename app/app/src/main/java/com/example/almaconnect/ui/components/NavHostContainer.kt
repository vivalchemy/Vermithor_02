package com.example.ui.navigation

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.almaconnect.ui.components.BottomNavItem
import com.example.almaconnect.ui.screens.CalendarScreen
import com.example.almaconnect.ui.screens.ChatScreen
import com.example.almaconnect.ui.screens.SettingsScreen
import com.example.ui.screens.*

@Composable
fun NavHostContainer(navController: NavHostController, modifier: Modifier = Modifier) {
    NavHost(navController = navController, startDestination = BottomNavItem.Home.route, modifier = modifier) {
        composable(BottomNavItem.Home.route) { HomeScreen() }
        composable(BottomNavItem.Chat.route) { ChatScreen() }
        composable(BottomNavItem.Calendar.route) { CalendarScreen() }
        composable(BottomNavItem.Settings.route) { SettingsScreen() }
    }
}
