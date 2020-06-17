namespace CompanyManagerApi.Models
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
