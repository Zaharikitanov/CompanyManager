﻿using CompanyManagerApi.Models.View;
using FluentValidation;

namespace CompanyManagerApi.Validators
{
    public class OfficeDataInputValidator : AbstractValidator<OfficeInputData>
    {
        public OfficeDataInputValidator()
        {
            RuleFor(entity => entity.City)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required")
                .MaximumLength(60);

            RuleFor(entity => entity.CompanyId)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required");

            RuleFor(entity => entity.Country)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required")
                .MaximumLength(60);

            RuleFor(entity => entity.Street)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required")
                .MaximumLength(60);

            RuleFor(entity => entity.StreetNumber)
                .NotEmpty()
                .WithMessage("Required")
                .NotNull()
                .WithMessage("Required");
        }
    }
}
