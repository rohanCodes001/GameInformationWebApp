using GameBackend.Entites;
using GameBackend.Models.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GameBackend.Services
{
    public interface IGamePostService
    {
        public Task<ActionResult<GameInfoDto>> CreateGamePost(GameInfoDto gameInfoDto);
        public Task<ActionResult<GameInfoDto>?> GetGamePost(int gameId);
        public Task<ActionResult<List<GameInfoDto>>> GetGamePosts();
        public Task<ActionResult<GameInfoDto>?> EditGamePost(int gameId, GameInfoDto gameInfoDto);

    }

    public class GamePostService : IGamePostService
    {

        // Gamedb context is an instance of the database after connecting it via scaffolding using ORM.
        private readonly GameDbContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public GamePostService(GameDbContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        // Creates a game post in db.
        public async Task<ActionResult<GameInfoDto>> CreateGamePost(GameInfoDto gameInfoDto)
        {
            var gameInfo = new GameInfo
            {
                GameDescription = gameInfoDto.GameDescription,
                GamePlatform = gameInfoDto.GamePlatform,
                GameYear = new DateTime(Convert.ToInt32(gameInfoDto.GameYear), 1, 1),
                GameTitle = gameInfoDto.GameTitle,
            };
            _context.GameInfos.Add(gameInfo);
            await _context.SaveChangesAsync();

            return new GameInfoDto(gameInfo);
        }

        // Returns a specific game post based on post corresponding to gameId.
        public async Task<ActionResult<GameInfoDto>?> GetGamePost(int gameId)
        {
            // Equivalent to sql where by finding the post based on a specified game id.
            var gameInfo = await _context.GameInfos.FirstOrDefaultAsync(gi =>  gi.GameId == gameId);
            if (gameInfo != null)
            {
                return new GameInfoDto(gameInfo);
            }
            else
            {
                return null;
            }
        }

        // Returns all game posts based in a list.
        public async Task<ActionResult<List<GameInfoDto>>> GetGamePosts()
        {
            return await _context.GameInfos.Select(uP => new GameInfoDto(uP)).ToListAsync();
        }

        public async Task<ActionResult<GameInfoDto>?> EditGamePost(int gameId, GameInfoDto gameInfoDto)
        {
            var gameInfo = await _context.GameInfos.FirstOrDefaultAsync(gi => gi.GameId == gameId);

            if (gameInfo != null)
            {
                gameInfo.GameTitle = gameInfoDto.GameTitle;
                gameInfo.GameDescription = gameInfoDto.GameDescription;
                gameInfo.GamePlatform = gameInfoDto.GamePlatform;
                gameInfo.GameYear = new DateTime(Convert.ToInt32(gameInfoDto.GameYear), 1, 1);

                await _context.SaveChangesAsync();

                return new GameInfoDto(gameInfo);
            }
            else
            {
                return null;
            }
        }


    }
}
