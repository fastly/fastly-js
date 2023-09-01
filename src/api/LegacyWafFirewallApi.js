/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* LegacyWafFirewall service.
* @module api/LegacyWafFirewallApi
* @version 6.1.0
*/
export default class LegacyWafFirewallApi {

    /**
    * Constructs a new LegacyWafFirewallApi. 
    * @alias module:api/LegacyWafFirewallApi
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
     * Create a firewall object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createLegacyWafFirewallServiceWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/wafs', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a firewall object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createLegacyWafFirewallService(options = {}) {
      return this.createLegacyWafFirewallServiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Disable a firewall for a particular service and version. This endpoint is intended to be used in an emergency. Disabling a firewall object for a specific service and version replaces your existing WAF ruleset with an empty ruleset. While disabled, your WAF ruleset will not be applied to your origin traffic. This endpoint is only available to users assigned the role of superuser or above. This is an asynchronous action. To check on the completion of this action, use the related link returned in the response to check on the Update Status of the action.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    disableLegacyWafFirewallWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/wafs/{firewall_id}/disable', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Disable a firewall for a particular service and version. This endpoint is intended to be used in an emergency. Disabling a firewall object for a specific service and version replaces your existing WAF ruleset with an empty ruleset. While disabled, your WAF ruleset will not be applied to your origin traffic. This endpoint is only available to users assigned the role of superuser or above. This is an asynchronous action. To check on the completion of this action, use the related link returned in the response to check on the Update Status of the action.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    disableLegacyWafFirewall(options = {}) {
      return this.disableLegacyWafFirewallWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Re-enable a firewall object for a particular service and version after it has been disabled. This endpoint is intended to be used in an emergency. When a firewall object is re-enabled, a newly generated WAF ruleset VCL based on the current WAF configuration is used to replace the empty ruleset. This endpoint is only available to users assigned the role of superuser or above. This is an asynchronous action. To check on the completion of this action, use the related link returned in the response to check on the Update Status of the action.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    enableLegacyWafFirewallWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/wafs/{firewall_id}/enable', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Re-enable a firewall object for a particular service and version after it has been disabled. This endpoint is intended to be used in an emergency. When a firewall object is re-enabled, a newly generated WAF ruleset VCL based on the current WAF configuration is used to replace the empty ruleset. This endpoint is only available to users assigned the role of superuser or above. This is an asynchronous action. To check on the completion of this action, use the related link returned in the response to check on the Update Status of the action.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    enableLegacyWafFirewall(options = {}) {
      return this.enableLegacyWafFirewallWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific firewall object.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `configuration_set`, `owasp`, `rules`, `rule_statuses`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getLegacyWafFirewallWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'firewall_id': options['firewall_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'include': options['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/wafs/{firewall_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific firewall object.
     * @param {Object} options
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `configuration_set`, `owasp`, `rules`, `rule_statuses`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getLegacyWafFirewall(options = {}) {
      return this.getLegacyWafFirewallWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a specific firewall object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getLegacyWafFirewallServiceWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'firewall_id': options['firewall_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/wafs/{firewall_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a specific firewall object.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getLegacyWafFirewallService(options = {}) {
      return this.getLegacyWafFirewallServiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all active firewall objects.
     * @param {Object} options
     * @param {String} [options.filter_rules_rule_id] - Limit the returned firewalls to a specific rule ID.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `configuration_set`, `owasp`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listLegacyWafFirewallsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[rules][rule_id]': options['filter_rules_rule_id'],
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/wafs', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all active firewall objects.
     * @param {Object} options
     * @param {String} [options.filter_rules_rule_id] - Limit the returned firewalls to a specific rule ID.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `configuration_set`, `owasp`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listLegacyWafFirewalls(options = {}) {
      return this.listLegacyWafFirewallsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all firewall objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `configuration_set`, `owasp`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    listLegacyWafFirewallsServiceWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/wafs', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all firewall objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {String} [options.include] - Include relationships. Optional, comma separated values. Permitted values: `configuration_set`, `owasp`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    listLegacyWafFirewallsService(options = {}) {
      return this.listLegacyWafFirewallsServiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a firewall object for a particular service and version. 
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateLegacyWafFirewallServiceWithHttpInfo(options = {}) {
      let postBody = options['request_body'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'firewall_id' is set.
      if (options['firewall_id'] === undefined || options['firewall_id'] === null) {
        throw new Error("Missing the required parameter 'firewall_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'firewall_id': options['firewall_id']
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
      let returnType = Object;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/wafs/{firewall_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a firewall object for a particular service and version. 
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.firewall_id - Alphanumeric string identifying a Firewall.
     * @param {Object.<String, {String: Object}>} [options.request_body]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateLegacyWafFirewallService(options = {}) {
      return this.updateLegacyWafFirewallServiceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
