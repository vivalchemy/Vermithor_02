package com.example.almaconnect

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.navigation.compose.rememberNavController
import com.example.almaconnect.ui.components.BottomNavBar
import com.example.almaconnect.ui.components.BottomNavBarApp
import com.example.almaconnect.ui.theme.Vermithor_02Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            Vermithor_02Theme {
                BottomNavBarApp()
            }
        }
    }
}