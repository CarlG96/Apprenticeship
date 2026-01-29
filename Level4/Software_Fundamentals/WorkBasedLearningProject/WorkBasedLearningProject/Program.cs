namespace WorkBasedLearningProject
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //int heightOfMap = 100;
            //int widthOfMap = 100;
            //var blockMap = new BlockMap(heightOfMap, widthOfMap);

            // Generation of 1D Perlin Noise
            var noiseSeeds = new double[256];
            Random r = new Random();
            for (int i = 0; i < noiseSeeds.Length; i++)
            {
                noiseSeeds[i] = r.NextDouble(); // Gets random seed values for the eventual Perlin Noise
            }
            Perlin1D(noiseSeeds);

        }

        public static void Perlin1D(double[] noiseSeeds)
        {
            double[] outputNoise = new double[noiseSeeds.Length]; // Create new array of same size as input array
            
            // Make sure that the size of array is a multiple of 2
            int octaves = 0;
            int value = noiseSeeds.Length;
            while(value >= 1)
            {
                octaves++;
                value /= 2;
            }
            Console.WriteLine($"Number of octaves are: {octaves}");
            // Do stuff and then divide sampleRate
            for (int i = 0; i < noiseSeeds.Length; i++)
            {
                double finalNoiseValue = 0.0;
                double scale = 1.0;
                double scaleAccumulator = 0.0; // Ensures values are between 0 and 1
                int sampleRate = noiseSeeds.Length;
                for (int j = 0; j < octaves; j++)
                {
                    int sample1Index = (i / sampleRate) * sampleRate; // Finds out the nearest sample index before or on the i value
                    int sample2Index = (sample1Index + sampleRate) % noiseSeeds.Length; // Finds out the nearest sample index after the i value, wraps if it exceeds array limit
                    int linearInterpolationStep = i % sampleRate; // What step of the interpolation is the i value on?
                    if(linearInterpolationStep == 0) // If the modulus is 0, we know this point is being sampled, so we can add the noiseSeed value here times scaling
                    {
                        finalNoiseValue += noiseSeeds[i] * scale;
                    }
                    else // This means that the i value is between two samples, so we should work out where it falls on linear interpolation
                    {
                        double stepsBetweenSamples = (noiseSeeds[sample2Index] - noiseSeeds[sample1Index]) / sampleRate;
                        finalNoiseValue += (noiseSeeds[sample1Index] + (linearInterpolationStep * stepsBetweenSamples)) * scale;
                    }
                    scaleAccumulator += scale;
                    scale = scale / 2;
                    sampleRate = sampleRate / 2;
                }
                outputNoise[i] = finalNoiseValue / scaleAccumulator;
               
              
                Console.Write(" " + Math.Floor(outputNoise[i] * 100)); 
            }
        }

        public static void Perlin2D(double[,] noiseSeeds)
        {

        }
    }           
}

