// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure/core-http";
import {
  LocationOptionsDetails,
  NumberUpdateCapabilities,
  LocationOptionsQuery
} from "./generated/src/models";

/**
 * Request to create a search.
 */
export interface CreateSearchRequest {
  /**
   * Display name of the search.
   */
  name: string;
  /**
   * Description of the search.
   */
  description: string;
  /**
   * List of subTypeIds associated with the search.
   */
  phonePlanIds: string[];
  /**
   * Areacode to search for.
   */
  areaCode: string;
}

/**
 * Options for creating a search.
 */
export interface CreateSearchOptions extends OperationOptions {
  /**
   * The quantity of phone numbers to request.
   */
  quantity?: number;
  /**
   * The location options of the search.
   */
  locationOptions?: LocationOptionsDetails[];
}

/**
 * A request for configuring a phone number.
 */
export interface ConfigurePhoneNumberRequest {
  /**
   * The E.164 representation representation of the phone number.
   */
  phoneNumber: string;
  /**
   * Associates the phone number with a given callback URL.
   */
  callbackUrl: string;
}

/**
 * Options for configuring a phone number.
 */
export interface ConfigurePhoneNumberOptions extends OperationOptions {
  /**
   * Associates the phone number with a given applicationId.
   */
  applicationId?: string;
  /**
   * Routable TargetId for the ACS Number
   */
  azurePstnTargetId?: string;
}

/**
 * Base options to pass a locale that is used for localizing strings in the responses.
 */
export interface LocalizationOptions extends OperationOptions {
  /**
   * Set locale to localize strings in responses.
   */
  locale?: string;
}

/**
 * Base options to pass pagination parameters.
 */
export interface PageableOptions extends OperationOptions {
  /**
   * An optional parameter for how many entries to skip, for pagination purposes. Default value: 0.
   */
  skip?: number;
  /**
   * An optional parameter for how many entries to return, for pagination purposes. Default value:
   * 100.
   */
  take?: number;
}

/**
 * Base options to pass a locale and pagination parameters in the same request.
 */
export interface PageableLocalizationOptions extends PageableOptions, LocalizationOptions {}

/**
 * Options for querying supported countries.
 */
export type ListSupportedCountriesOptions = PageableLocalizationOptions;

/**
 * Options for listing acquired phone numbers.
 */
export type ListPhoneNumbersOptions = PageableLocalizationOptions;

/**
 * Options for querying plan groups by country.
 */
export interface ListPhonePlanGroupsOptions extends PageableLocalizationOptions {
  includeRateInformation?: boolean;
}

/**
 * Request to get available area codes.
 */
export interface GetAreaCodesRequest {
  /**
   * The type of location information required by the plan.
   */
  locationType: string;
  /**
   * The ISO 3166-2 country code to find national destination codes for.
   */
  countryCode: string;
  /**
   * The phone plan's id.
   */
  phonePlanId: string;
}

/**
 * Options for querying available area codes.
 */
export interface GetAreaCodesOptions extends OperationOptions {
  /**
   * The location query to find national destination codes for.
   */
  locationOptions?: LocationOptionsQuery[];
}

/**
 * Additional options for updating phone numbers capabilities.
 */
export interface UpdateCapabilitiesOptions extends OperationOptions {
  phoneNumbers?: { [propertyName: string]: NumberUpdateCapabilities };
}

export interface ListPhonePlansRequest {
  /**
   * The ISO 3166-2 country code to find national destination codes for.
   */
  countryCode: string;
  /**
   * The id of the phone plan group to get plans from.
   */
  phonePlanGroupId: string;
}

/**
 * Options for listing phone plans.
 */
export type ListPhonePlansOptions = PageableLocalizationOptions;

export interface GetPhonePlanLocationOptionsRequest extends PageableLocalizationOptions {
  /**
   * The ISO 3166-2 country code to find national destination codes for.
   */
  countryCode: string;
  /**
   * The id of the phone plan group.
   */
  phonePlanGroupId: string;
  /**
   * The id of the phone plan.
   */
  phonePlanId: string;
}

/**
 * Options for getting a plan location options
 */
export type GetPhonePlanLocationOptionsOptions = PageableLocalizationOptions;
