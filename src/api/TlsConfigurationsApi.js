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
import TlsConfiguration from '../model/TlsConfiguration';
import TlsConfigurationResponse from '../model/TlsConfigurationResponse';
import TlsConfigurationsResponse from '../model/TlsConfigurationsResponse';

/**
* TlsConfigurations service.
* @module api/TlsConfigurationsApi
* @version 3.3.0
*/
export default class TlsConfigurationsApi {

    /**
    * Constructs a new TlsConfigurationsApi. 
    * @alias module:api/TlsConfigurationsApi
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
     * Show a TLS configuration.
     * @param {Object} options
     * @param {String} options.tls_configuration_id - Alphanumeric string identifying a TLS configuration.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsConfigurationResponse} and HTTP response
     */
    getTlsConfigWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_configuration_id' is set.
      if (options['tls_configuration_id'] === undefined || options['tls_configuration_id'] === null) {
        throw new Error("Missing the required parameter 'tls_configuration_id'.");
      }

      let pathParams = {
        'tls_configuration_id': options['tls_configuration_id']
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
      let returnType = TlsConfigurationResponse;
      return this.apiClient.callApi(
        '/tls/configurations/{tls_configuration_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Show a TLS configuration.
     * @param {Object} options
     * @param {String} options.tls_configuration_id - Alphanumeric string identifying a TLS configuration.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsConfigurationResponse}
     */
    getTlsConfig(options = {}) {
      return this.getTlsConfigWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all TLS configurations.
     * @param {Object} options
     * @param {String} [options.filter_bulk] - Optionally filters by the bulk attribute.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsConfigurationsResponse} and HTTP response
     */
    listTlsConfigsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[bulk]': options['filter_bulk'],
        'include': options['include'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsConfigurationsResponse;
      return this.apiClient.callApi(
        '/tls/configurations', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all TLS configurations.
     * @param {Object} options
     * @param {String} [options.filter_bulk] - Optionally filters by the bulk attribute.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsConfigurationsResponse}
     */
    listTlsConfigs(options = {}) {
      return this.listTlsConfigsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a TLS configuration.
     * @param {Object} options
     * @param {String} options.tls_configuration_id - Alphanumeric string identifying a TLS configuration.
     * @param {module:model/TlsConfiguration} [options.tls_configuration]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsConfigurationResponse} and HTTP response
     */
    updateTlsConfigWithHttpInfo(options = {}) {
      let postBody = options['tls_configuration'];
      // Verify the required parameter 'tls_configuration_id' is set.
      if (options['tls_configuration_id'] === undefined || options['tls_configuration_id'] === null) {
        throw new Error("Missing the required parameter 'tls_configuration_id'.");
      }

      let pathParams = {
        'tls_configuration_id': options['tls_configuration_id']
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
      let returnType = TlsConfigurationResponse;
      return this.apiClient.callApi(
        '/tls/configurations/{tls_configuration_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a TLS configuration.
     * @param {Object} options
     * @param {String} options.tls_configuration_id - Alphanumeric string identifying a TLS configuration.
     * @param {module:model/TlsConfiguration} [options.tls_configuration]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsConfigurationResponse}
     */
    updateTlsConfig(options = {}) {
      return this.updateTlsConfigWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
