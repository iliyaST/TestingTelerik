﻿namespace ProjectManager.CLI.Models.Contracts
{
    public interface IUser
    {
        string UserName { get; set; }

        string Email { get; set; }
    }
}
