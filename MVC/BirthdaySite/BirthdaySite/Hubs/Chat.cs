﻿using Microsoft.AspNet.SignalR;
using MVCTemplate.Services.Data;

namespace SignalRChat.Hubs
{
    public class Chat : Hub
    {
        private IGroupService groups;

        public Chat(IGroupService groups)
        {
            this.groups = groups;
        }

        public void JoinRoom(string room)
        {
            Groups.Add(Context.ConnectionId, room);
        }

        public void SendMessageToRoom(string message, string rooms)
        {
            var user = this.Context.User.Identity.Name;
            var index = user.IndexOf("@");
            var author = user.Substring(0, index);

            Clients.Group(rooms).addMessage(message, author);
        }
    }
}