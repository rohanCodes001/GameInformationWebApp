using GameBackend.Entites;
using GameBackend.Models.Dto;
using GameBackend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GameBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamePostController : ControllerBase
    {
        private readonly IGamePostService _gamePostService;

        public GamePostController(IGamePostService gamePostService)
        {
            _gamePostService = gamePostService;
        }

        [HttpPost]
        public async Task<ActionResult<GameInfoDto>> CreateGamePost(GameInfoDto gameInfoDto)
        {
            try { 
                var gameInfo = await _gamePostService.CreateGamePost(gameInfoDto);
                return CreatedAtAction("CreateGamePost", gameInfo);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        [HttpGet("{gameId}")]
        public async Task<ActionResult<GameInfoDto>?> GetGamePost(int gameId)
        {
            // The controller is simply invoking the methods described in the service layer.
            try
            {
                var gameInfo = await _gamePostService.GetGamePost(gameId);
                return Ok(gameInfo);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        [HttpGet]
        public async Task<ActionResult<List<GameInfoDto>>> GetGamePosts()
        {
            try
            {
                return Ok(await _gamePostService.GetGamePosts());
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        // PUT: api/UserPosts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{gameId}")]
        public async Task<ActionResult<GameInfoDto>> PutUserPost(int gameId, GameInfoDto gameInfoDto)
        {
            if (gameId <= 0 || gameId != gameInfoDto.GameId)
            {
                return BadRequest();
            }

            try
            {
                var gamePostDtoResult = await _gamePostService.EditGamePost(gameId, gameInfoDto);

                return gamePostDtoResult != null ? Ok(gamePostDtoResult) : NotFound();
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }



    }
}
