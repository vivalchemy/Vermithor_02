package com.example.almaconnect.ui.components

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.almaconnect.ui.screens.CalendarScreen
import com.example.almaconnect.ui.screens.ChatLauncherScreen
import com.example.almaconnect.ui.screens.DonationScreen
import com.example.almaconnect.ui.screens.HomeScreen
import com.example.almaconnect.ui.screens.SettingsScreen

@Composable
fun NavHostContainer(navController: NavHostController, modifier: Modifier = Modifier) {
    NavHost(navController = navController, startDestination = BottomNavItem.Home.route, modifier = modifier) {
        composable(BottomNavItem.Home.route) { HomeScreen() }
        composable(BottomNavItem.Chat.route) { ChatLauncherScreen() }
        composable(BottomNavItem.Calendar.route) { CalendarScreen() }
        composable(BottomNavItem.Donation.route) { DonationScreen() }
        composable(BottomNavItem.Settings.route) { SettingsScreen() }
    }
}
