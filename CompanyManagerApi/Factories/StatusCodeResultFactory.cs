﻿using CompanyManagerApi.Factories.Interfaces;
using CompanyManagerApi.Models;
using System.Net;

namespace CompanyManagerApi.Factories
{
    public class StatusCodeResultFactory : IStatusCodeResultFactory
    {
        public HttpStatusCode Create(EntityActionOutcome entityOutcome)
        {
            switch (entityOutcome)
            {
                case EntityActionOutcome.Success:
                    return HttpStatusCode.OK;

                case EntityActionOutcome.CreateFailed:
                case EntityActionOutcome.UpdateFailed:
                    return HttpStatusCode.Conflict;

                case EntityActionOutcome.MissingFullEntityData:
                    return HttpStatusCode.UnprocessableEntity;
                    
                case EntityActionOutcome.EntityNotFound:
                    return HttpStatusCode.NotFound;

                default:
                    return HttpStatusCode.InternalServerError;
            }
        }
    }
}
