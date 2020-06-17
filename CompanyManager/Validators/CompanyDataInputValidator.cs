using CompanyManager.Models.View;
using FluentValidation;

namespace CompanyManager.Validators
{
    public class CompanyDataInputValidator : AbstractValidator<CompanyInputData>
    {
        public CompanyDataInputValidator()
        {
            RuleFor(entity => entity.Name)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required")
                .MaximumLength(90);
        }
    }
}
