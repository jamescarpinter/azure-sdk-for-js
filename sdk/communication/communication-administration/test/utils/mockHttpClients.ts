// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpClient, WebResourceLike, HttpOperationResponse, HttpHeaders } from "@azure/core-http";
import {
  AcquiredPhoneNumber,
  AcquiredPhoneNumbers,
  CommunicationIdentityToken,
  PhoneNumberCountries,
  PhoneNumberCountry,
  PhoneNumberEntities,
  PhoneNumberEntity,
  PhonePlan,
  PhonePlanGroup,
  PhonePlanGroups,
  PhonePlansResponse
} from "../../src";
import { CommunicationIdentity } from "../../src/communicationIdentity/generated/src/models";

export const createMockHttpClient = <T = {}>(status: number = 200, parsedBody?: T): HttpClient => {
  return {
    async sendRequest(httpRequest: WebResourceLike): Promise<HttpOperationResponse> {
      return {
        status,
        headers: new HttpHeaders(),
        request: httpRequest,
        parsedBody
      };
    }
  };
};

const tokenResponse = {
  id: "identity",
  token: "token",
  expiresOn: new Date("2011/11/30")
};
export const issueTokenHttpClient: HttpClient = createMockHttpClient<CommunicationIdentityToken>(
  200,
  tokenResponse
);
export const revokeTokensHttpClient: HttpClient = createMockHttpClient(204);
export const createUserHttpClient: HttpClient = createMockHttpClient<CommunicationIdentity>(200, {
  id: "identity"
});

const phoneNumbers: AcquiredPhoneNumber[] = [
  {
    phoneNumber: "18496882843",
    acquiredCapabilities: ["Calling"],
    availableCapabilities: ["Calling"]
  },
  {
    phoneNumber: "16985130246",
    acquiredCapabilities: ["Azure"],
    availableCapabilities: ["Premium"]
  },
  {
    phoneNumber: "18763308832",
    acquiredCapabilities: ["Calling"],
    availableCapabilities: ["Azure"]
  }
];
export const listPhoneNumbersHttpClient: HttpClient = createMockHttpClient<AcquiredPhoneNumbers>(
  200,
  { phoneNumbers }
);

const countries: PhoneNumberCountry[] = [
  {
    localizedName: "France",
    countryCode: "FR"
  },
  {
    localizedName: "Canada",
    countryCode: "CA"
  }
];
export const listSupportedCountriesHttpClient: HttpClient = createMockHttpClient<
  PhoneNumberCountries
>(200, {
  countries
});

const phonePlanGroups: PhonePlanGroup[] = [
  {
    phonePlanGroupId: "1",
    localizedName: "France",
    localizedDescription: "The #1 plan."
  },
  {
    phonePlanGroupId: "2",
    localizedName: "France",
    localizedDescription: "The #2 plan."
  }
];
export const listPhonePlanGroupsHttpClient: HttpClient = createMockHttpClient<PhonePlanGroups>(
  200,
  { phonePlanGroups }
);

const phonePlans: PhonePlan[] = [
  {
    phonePlanId: "1",
    localizedName: "France",
    locationType: "NotRequired"
  },
  {
    phonePlanId: "2",
    localizedName: "France",
    locationType: "CivicAddress"
  }
];
export const listPhonePlansHttpClient: HttpClient = createMockHttpClient<PhonePlansResponse>(200, {
  phonePlans
});

const entities: PhoneNumberEntity[] = [{ id: "1" }, { id: "2" }, { id: "3" }];
export const listReleasesOrSearchesHttpClient: HttpClient = createMockHttpClient<
  PhoneNumberEntities
>(200, { entities });
