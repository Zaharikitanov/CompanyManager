namespace CompanyManager.Models
{
    public enum EntityActionOutcome
    {
        Success,
        EntityNotFound,
        UpdateFailed,
        MissingFullEntityData,
        CreateFailed
    }
}
