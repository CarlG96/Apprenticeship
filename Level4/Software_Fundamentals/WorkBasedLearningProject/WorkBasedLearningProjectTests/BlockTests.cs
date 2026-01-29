using FluentAssertions;
using System.Text.RegularExpressions;
using WorkBasedLearningProject;

namespace WorkBasedLearningProjectTests
{
    public class BlockTests
    {
        [Fact]
        public void AllBlocksHaveBlockNamesInTheCorrectFormat()
        {
            // Arrange
            Block[] blocks = new Block[100];

            // Act
            for (int i = 0; i < blocks.Length; i++)
            {
                blocks[i] = new Block(0, 0);
            }

            // Assert
            Regex rgx = new Regex("Block[0-9]+");
            blocks.Should().AllSatisfy(block => rgx.IsMatch(block.BlockName));
        }

        [Theory]
        [InlineData(100, 100, 10000)]
        [InlineData(0, 0, 0)]
        [InlineData(1, 1, 1)]
        public void BlockMapShouldReturnCorrectNumberOfBlocks(int height, int width, int expectedNumOfBlocks)
        {
            // Arrange
            var blockMap = new BlockMap(height, width);

            // Assert
            blockMap.Blocks.LongLength.Should().Be(expectedNumOfBlocks);
        }

        [Fact]
        public void BlocksInBlockMapShouldAlwaysHaveEnrichmentCompleteTimesAfterIngestionStartTimes()
        {
            // Arrange
            BlockMap blockMap;
            Block[] flattenedBlockMap;
            bool enrichmentCompleteTimes = false;// Small chance no ingestion start times are created 

            // Act
            do
            {
                blockMap = new BlockMap(100, 100);
                flattenedBlockMap = blockMap.Blocks.Cast<Block>().ToArray(); // Flattens 2D array to 1D array
                if (flattenedBlockMap.Any(block => block.EnrichmentCompleteTime.HasValue)){
                    enrichmentCompleteTimes = true;
                }

            } while (!enrichmentCompleteTimes);
            Block[] completedBlocks = flattenedBlockMap.Where(block => block.EnrichmentCompleteTime is not null).ToArray(); 

            // Assert
            completedBlocks.Should().AllSatisfy(block => block.IngestionStartTime
                .Should()
                .BeLessThan(block.EnrichmentCompleteTime.Value.TimeOfDay));
            
        }

        [Fact]
        public void BlocksInBlockMapAlwaysHaveNullEnrichmentStatusWhenIngestionStatusIsNotComplete()
        {
            // Arrange
            BlockMap blockMap;
            Block[] flattenedBlockMap;
            bool nullFieldsCreated = false;

            // Act
            do
            {
                blockMap = new BlockMap(100, 100);
                flattenedBlockMap = blockMap.Blocks.Cast<Block>().ToArray(); // Flattens 2D array to 1D array
                if(flattenedBlockMap.Any(block => block.IngestionStatus != IngestionStatusType.Complete))
                {
                    nullFieldsCreated = true;
                }
            } while (!nullFieldsCreated);

            Block[] nonIngestedBlocks = flattenedBlockMap.Where(block => block.IngestionStatus != IngestionStatusType.Complete).ToArray();

            // Assert
            nonIngestedBlocks.Should().AllSatisfy(block => block.EnrichmentStatus.Should().BeNull());
        }
        
        [Fact]
        public void BlocksInBlockMapAlwaysProduceValuesForEnrichmentStatusWhenIngestionStatusIsComplete()
        {
            // Arrange
            BlockMap blockMap;
            Block[] flattenedBlockMap;
            bool fieldsCreated = false;

            // Act
            do
            {
                blockMap = new BlockMap(100, 100);
                flattenedBlockMap = blockMap.Blocks.Cast<Block>().ToArray(); // Flattens 2D array to 1D array
                if (flattenedBlockMap.Any(block => block.IngestionStatus == IngestionStatusType.Complete))
                {
                    fieldsCreated = true;
                }
            } while (!fieldsCreated);

            Block[] ingestedBlocks = flattenedBlockMap.Where(block => block.IngestionStatus == IngestionStatusType.Complete).ToArray();

            // Assert
            ingestedBlocks.Should().AllSatisfy(block => block.EnrichmentStatus.Should().NotBeNull());
        }

        [Fact]
        public void BlocksInBlockMapAlwaysProduceNullEnrichmentCompleteTimesWhenEnrichmentStatusIsNotCompleted()
        {
            // Arrange
            BlockMap blockMap;
            Block[] flattenedBlockMap;
            bool nullFieldsCreated = false;

            // Act
            do
            {
                blockMap = new BlockMap(100, 100);
                flattenedBlockMap = blockMap.Blocks.Cast<Block>().ToArray(); // Flattens 2D array to 1D array
                if(flattenedBlockMap.Any(block => block.EnrichmentStatus != EnrichmentStatusType.Complete))
                {
                    nullFieldsCreated = true;
                }
            } while (!nullFieldsCreated);

            Block[] nonEnrichedBlocks = flattenedBlockMap.Where(block => block.EnrichmentStatus != EnrichmentStatusType.Complete).ToArray();

            // Assert
            nonEnrichedBlocks.Should().AllSatisfy(block => block.EnrichmentCompleteTime.Should().BeNull());
        }
        
        [Fact]
        public void BlocksInBlockMapAlwaysProduceValuesForEnrichmentCompleteTimesWhenEnrichmentStatusIsComplete()
        {
            // Arrange
            BlockMap blockMap;
            Block[] flattenedBlockMap;
            bool fieldsCreated = false;

            // Act
            do
            {
                blockMap = new BlockMap(100, 100);
                flattenedBlockMap = blockMap.Blocks.Cast<Block>().ToArray(); // Flattens 2D array to 1D array
                if(flattenedBlockMap.Any(block => block.EnrichmentStatus == EnrichmentStatusType.Complete))
                {
                    fieldsCreated = true;
                }
            } while (!fieldsCreated);

            Block[] enrichedBlocks = flattenedBlockMap.Where(block => block.EnrichmentStatus == EnrichmentStatusType.Complete).ToArray();

            // Assert
            enrichedBlocks.Should().AllSatisfy(block => block.EnrichmentCompleteTime.Should().NotBeNull());
        }
    }
}
