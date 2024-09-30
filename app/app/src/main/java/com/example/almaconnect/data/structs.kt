package com.example.almaconnect.data.structs

data class AlumniStudentMessage(
    val content: String,
    val isUserMessage: Boolean,
    val timestamp: String,
    val sender: Sender? = null,
    val senderType: SenderType? = null
) {
    data class Sender(
        val name: String?,
        val avatarUrl: String?
    )

    enum class SenderType {
        ALUMNI,
        STUDENT
    }
}

data class ForumMessage(
    val content: String,
    val isUserMessage: Boolean,
    val timestamp: String,
    val forumTitle: String,
    val forumIconUrl: String
)


sealed class ConversationType {
    object AlumniStudent : ConversationType()
    object Forum : ConversationType()
}

