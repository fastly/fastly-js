/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import WafExclusion from '../model/WafExclusion';
import WafExclusionResponse from '../model/WafExclusionResponse';
import WafExclusionsResponse from '../model/WafExclusionsResponse';

/**
* WafExclusions service.
* @module api/WafExclusionsApi
* @version 9.0.0
*/
export default class WafExclusionsApi {

    /**
    * Constructs a new WafExclusionsApi. 
    * @alias module:api/WafExclusionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Create a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {module:model/WafExclusion} [options.waf_exclusion]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafExclusionResponse} and HTTP response
     */
    createWafRuleExclusionWithHttpInfo(options = {}) {
      let postBody = options['waf_exclusion'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'firewall_version_number' is set.
      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafExclusionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {module:model/WafExclusion} [options.waf_exclusion]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafExclusionResponse}
     */
    createWafRuleExclusion(options = {}) {
      return this.createWafRuleExclusionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {Number} options.exclusion_number - A numeric ID identifying a WAF exclusion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWafRuleExclusionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'firewall_version_number' is set.
      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }
      // Verify the required parameter 'exclusion_number' is set.
      if (options['exclusion_number'] === undefined || options['exclusion_number'] === null) {
        throw new Error("Missing the required parameter 'exclusion_number'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number'],
        'exclusion_number': options['exclusion_number']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {Number} options.exclusion_number - A numeric ID identifying a WAF exclusion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWafRuleExclusion(options = {}) {
      return this.deleteWafRuleExclusionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific WAF exclusion object.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {Number} options.exclusion_number - A numeric ID identifying a WAF exclusion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafExclusionResponse} and HTTP response
     */
    getWafRuleExclusionWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'firewall_version_number' is set.
      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }
      // Verify the required parameter 'exclusion_number' is set.
      if (options['exclusion_number'] === undefined || options['exclusion_number'] === null) {
        throw new Error("Missing the required parameter 'exclusion_number'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number'],
        'exclusion_number': options['exclusion_number']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafExclusionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific WAF exclusion object.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {Number} options.exclusion_number - A numeric ID identifying a WAF exclusion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafExclusionResponse}
     */
    getWafRuleExclusion(options = {}) {
      return this.getWafRuleExclusionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all exclusions for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {module:model/String} [options.filter_exclusion_type] - Filters the results based on this exclusion type.
     * @param {String} [options.filter_name] - Filters the results based on name.
     * @param {Number} [options.filter_waf_rules_modsec_rule_id] - Filters the results based on this ModSecurity rule ID.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rules` and `waf_rule_revisions`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafExclusionsResponse} and HTTP response
     */
    listWafRuleExclusionsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'firewall_version_number' is set.
      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[exclusion_type]': options['filter_exclusion_type'],
        'filter[name]': options['filter_name'],
        'filter[waf_rules.modsec_rule_id]': options['filter_waf_rules_modsec_rule_id'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafExclusionsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all exclusions for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {module:model/String} [options.filter_exclusion_type] - Filters the results based on this exclusion type.
     * @param {String} [options.filter_name] - Filters the results based on name.
     * @param {Number} [options.filter_waf_rules_modsec_rule_id] - Filters the results based on this ModSecurity rule ID.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma-separated values. Permitted values: `waf_rules` and `waf_rule_revisions`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafExclusionsResponse}
     */
    listWafRuleExclusions(options = {}) {
      return this.listWafRuleExclusionsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {Number} options.exclusion_number - A numeric ID identifying a WAF exclusion.
     * @param {module:model/WafExclusion} [options.waf_exclusion]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WafExclusionResponse} and HTTP response
     */
    updateWafRuleExclusionWithHttpInfo(options = {}) {
      let postBody = options['waf_exclusion'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }
      // Verify the required parameter 'firewall_version_number' is set.
      if (options['firewall_version_number'] === undefined || options['firewall_version_number'] === null) {
        throw new Error("Missing the required parameter 'firewall_version_number'.");
      }
      // Verify the required parameter 'exclusion_number' is set.
      if (options['exclusion_number'] === undefined || options['exclusion_number'] === null) {
        throw new Error("Missing the required parameter 'exclusion_number'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id'],
        'firewall_version_number': options['firewall_version_number'],
        'exclusion_number': options['exclusion_number']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafExclusionResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a WAF exclusion for a particular firewall version.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a WAF Firewall.
     * @param {Number} options.firewall_version_number - Integer identifying a WAF firewall version.
     * @param {Number} options.exclusion_number - A numeric ID identifying a WAF exclusion.
     * @param {module:model/WafExclusion} [options.waf_exclusion]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WafExclusionResponse}
     */
    updateWafRuleExclusion(options = {}) {
      return this.updateWafRuleExclusionWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
