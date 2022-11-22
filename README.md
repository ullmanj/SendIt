# SendIt

# Screens and Navigators
App (Tab Navigator)
|
| — HomeStack (Stack Navigator)
| | - HomeScreen
| | — PendingInvitesScreen
| | — MapScreen
| | — ChatScreen
|
| — SendStack (Stack Navigator)
| | - GroupSendScreen
| | — MapScreen
| | — ChatScreen
| | — UpdateInterestScreen
|
| — LogStack (Stack Navigator)
| | - SendLogScreen
| | — SendInfoScreen
| | — ChatScreen
|

# Flows (newlines represent options/forks in the path)
App
| (HomeStack) => HomeScreen -> PendingInvitesScreen ->
                                            MapScreen -> ChatScreen -> (?)
                                            ChatScreen -> (?)
| (SendStack) => GroupSendScreen ->
                                MapScreen -> ChatScreen -> (LogStack)
                                UpdateInterestScreen -> (Back)
| (LogStack) => SendLogScreen -> SendInfoScreen -> ChatScreen -> (Back)

* (?) means (LogStack OR Back)
