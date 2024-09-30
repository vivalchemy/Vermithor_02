import androidx.compose.runtime.Composable
import com.example.almaconnect.data.structs.AlumniStudentMessage
import com.example.almaconnect.data.structs.ConversationType
import com.example.almaconnect.data.structs.ForumMessage

@Composable
fun ChatScreen(
    conversationType: ConversationType,
    username: String? = null, // Optional for Forum chat
    userIconUrl: String? = null, // Optional for Forum chat
    forumTitle: String? = null, // Optional for AlumniStudent chat
    forumIconUrl: String? = null, // Optional for AlumniStudent chat
    messages: List<Any>, // List of com.example.almaconnect.data.structs.AlumniStudentMessage or com.example.almaconnect.data.structs.ForumMessage based on type
    onSendMessage: (String) -> Unit
) {
    when (conversationType) {
        ConversationType.AlumniStudent -> AlumniStudentChatScreen(
            username = username!!,
            userIconUrl = userIconUrl!!,
            messages = messages as List<AlumniStudentMessage>,
            onSendMessage = onSendMessage
        )
        ConversationType.Forum -> ForumChatScreen(
            forumTitle = forumTitle!!,
            forumIconUrl = forumIconUrl!!,
            messages = messages as List<ForumMessage>,
            onSendMessage = onSendMessage
        )
    }
}