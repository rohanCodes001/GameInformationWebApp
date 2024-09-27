using System;
using System.Collections.Generic;

namespace GameBackend.Entites;

public partial class GameInfo
{
    public int GameId { get; set; }

    public string? GameDescription { get; set; }

    public string? GamePlatform { get; set; }

    public string? GameTitle { get; set; }

    public DateTime? GameYear { get; set; }
}
