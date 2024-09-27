using GameBackend.Entites;

namespace GameBackend.Models.Dto
{
    public class GameInfoDto
    {
        public int? GameId { get; set; }

        public string? GameDescription { get; set; }

        public string? GamePlatform { get; set; }

        public string? GameTitle { get; set; }

        public string? GameYear { get; set; }

        public GameInfoDto()
        { }

        public GameInfoDto(GameInfo gameInfo)
        {
            GameId = gameInfo.GameId;
            GameDescription = gameInfo.GameDescription;
            GamePlatform = gameInfo.GamePlatform;
            GameYear = gameInfo.GameYear != null ? ((DateTime) gameInfo.GameYear).Year.ToString(): "";
            GameTitle = gameInfo.GameTitle;
        }

    }
}
