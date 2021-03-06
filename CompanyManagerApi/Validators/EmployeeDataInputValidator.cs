﻿using CompanyManagerApi.Models.View;
using FluentValidation;

namespace CompanyManagerApi.Validators
{
    public class EmployeeDataInputValidator : AbstractValidator<EmployeeInputData>
    {
        public EmployeeDataInputValidator()
        {
            RuleFor(entity => entity.ExperienceLevel)
                .IsInEnum()
                .WithMessage("Required");

            RuleFor(entity => entity.FirstName)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required")
                .MaximumLength(60); ;

            RuleFor(entity => entity.LastName)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required")
                .MaximumLength(60);

            RuleFor(entity => entity.OfficeId)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required");

            RuleFor(entity => entity.ProfileImage)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required")
                .Matches("([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)")
                .WithMessage("Invalid file format.");

            RuleFor(entity => entity.Salary)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required");

            RuleFor(entity => entity.VacationDays)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required");
        }
    }
}
