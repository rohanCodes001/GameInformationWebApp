using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GameBackend.Entites;

public partial class GameDbContext : DbContext
{
    public GameDbContext()
    {
    }

    public GameDbContext(DbContextOptions<GameDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<GameInfo> GameInfos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<GameInfo>(entity =>
        {
            entity.HasKey(e => e.GameId);

            entity.ToTable("GameInfo");

            entity.Property(e => e.GameId).HasColumnName("GameID");
            entity.Property(e => e.GameDescription).IsUnicode(false);
            entity.Property(e => e.GamePlatform)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.GameTitle)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.GameYear).HasColumnType("datetime");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
