namespace WorkBasedLearningProject
{
    public class BlockMap
    {
        public Block[,] Blocks { get; init; }
        public BlockMap(int height, int width)
        {
            Blocks = new Block[height, width];
            for(int i = 0; i < height; i++)
            {
                for(int j = 0; j < width; j++)
                {
                    Blocks[i, j] = new Block(i, j);
                }
            }
        }
    }
    public class Block
    {
        private static int _blockNumber = 0; // Used to increment the name only
        public readonly string BlockName;
        public readonly int Y;
        public readonly int X;
        public readonly int Height;
        public readonly DateTime IngestionStartTime;
        public readonly IngestionStatusType IngestionStatus;
        public readonly EnrichmentStatusType? EnrichmentStatus;
        public readonly DateTime? EnrichmentCompleteTime;

        public Block(int height, int width)
        {
            _blockNumber++;
            BlockName = $"Block{_blockNumber}";
            Y = height;
            X = width;
            IngestionStartTime = GenerateIngestionStartTime();
            IngestionStatus = GenerateIngestionStatus();
            EnrichmentStatus = IngestionStatus == IngestionStatusType.Complete ?
                GenerateEnrichmentStatus() : null;
            EnrichmentCompleteTime = EnrichmentStatus == EnrichmentStatusType.Complete ?
                GenerateEnrichmentCompleteTime(IngestionStartTime) : null;
        }


        private DateTime GenerateIngestionStartTime()
        {
            Random r = new Random();

            int year = r.Next(2020, 2025); // Year range given to be more realistic
            int month = r.Next(1, 13);
            int day = r.Next(1, DateTime.DaysInMonth(year, month) + 1);
            int hour = r.Next(0, 24);
            int minute = r.Next(0, 60);
            int second = r.Next(0, 60);
            int millisecond = r.Next(0, 1000);

            return new DateTime(year, month, day, hour, minute, second, millisecond);
        }

        private IngestionStatusType GenerateIngestionStatus()
        {
            Random r = new Random();
            int probability = r.Next(1, 3);
            if (probability == 1)
            {
                return IngestionStatusType.Pending;
            }
            return IngestionStatusType.Complete;
        }
        private EnrichmentStatusType? GenerateEnrichmentStatus()
        {
            Random r = new Random();
            double probability = r.NextDouble();
            if (probability < 0.2)
            {
                return EnrichmentStatusType.Fail;
            }
            else if (probability < 0.4)
            {
                return EnrichmentStatusType.Running;
            }
            else if (probability < 0.5)
            {
                return EnrichmentStatusType.Rerunning;
            }
            return EnrichmentStatusType.Complete;
        }

        private DateTime? GenerateEnrichmentCompleteTime(DateTime ingestionStartTime)
        {
            Random r = new Random();

            int addedMinutes = r.Next(10, 60);
            var newDate = new DateTime(ingestionStartTime.Year,
                ingestionStartTime.Month,
                ingestionStartTime.Day,
                ingestionStartTime.Hour,
                ingestionStartTime.Minute,
                ingestionStartTime.Second,
                ingestionStartTime.Millisecond);

            ingestionStartTime.AddMinutes(addedMinutes);
            return ingestionStartTime;
        }

    }

    public enum EnrichmentStatusType
    {
        Complete,
        Fail,
        Running,
        Rerunning
    }

    public enum IngestionStatusType
    {
        Complete,
        Pending
    }

}
