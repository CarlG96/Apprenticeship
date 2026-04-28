using System.Reflection.Metadata.Ecma335;

internal class Program
{
    private static void Main(string[] args)
    {
        File file = new TextFile(10);
        File file2 = new TextFile(20);
        Directory directory = new Directory();
        directory.Add(file);
        directory.Add(file2);
        Console.WriteLine(directory.GetSize());

	}
}

public interface File
{
    public string GetType();
    public int GetSize();
}

public class TextFile : File
{
    private string _type;
    private int _size;
    public TextFile(int size) { 
        _type = "text";
        _size = size;
    }
    public string GetType()
    {
        return _type;
    }
    public int GetSize()
    {
        return _size;
    }
}

public class Directory : File
{
    private List<File> _files;
    private string _type;

	public Directory() { 
        _type = "directory";
        _files = new List<File>();
    }
    public string GetType()
    {
        return _type;
    }
    public int GetSize()
    {
        int size = 0;
        foreach (File f in _files)
        {
            size += f.GetSize();
        }
        return size;
    }

    public void Add(File f)
    {
        _files.Add(f);
    }
}

