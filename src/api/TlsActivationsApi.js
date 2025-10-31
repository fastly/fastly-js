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
import TlsActivation from '../model/TlsActivation';
import TlsActivationResponse from '../model/TlsActivationResponse';
import TlsActivationsResponse from '../model/TlsActivationsResponse';

/**
* TlsActivations service.
* @module api/TlsActivationsApi
* @version 14.0.0
*/
export default class TlsActivationsApi {

    /**
    * Constructs a new TlsActivationsApi. 
    * @alias module:api/TlsActivationsApi
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
     * Enable TLS for a particular TLS domain and certificate combination. These relationships must be specified to create the TLS activation.
     * @param {Object} options
     * @param {module:model/TlsActivation} [options.tls_activation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsActivationResponse} and HTTP response
     */
    createTlsActivationWithHttpInfo(options = {}) {
      let postBody = options['tls_activation'];

      let pathParams = {
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
      let returnType = TlsActivationResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/activations', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Enable TLS for a particular TLS domain and certificate combination. These relationships must be specified to create the TLS activation.
     * @param {Object} options
     * @param {module:model/TlsActivation} [options.tls_activation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsActivationResponse}
     */
    createTlsActivation(options = {}) {
      return this.createTlsActivationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Disable TLS on the domain associated with this TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id - Alphanumeric string identifying a TLS activation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTlsActivationWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_activation_id' is set.
      if (options['tls_activation_id'] === undefined || options['tls_activation_id'] === null) {
        throw new Error("Missing the required parameter 'tls_activation_id'.");
      }

      let pathParams = {
        'tls_activation_id': options['tls_activation_id']
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
        '/tls/activations/{tls_activation_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Disable TLS on the domain associated with this TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id - Alphanumeric string identifying a TLS activation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTlsActivation(options = {}) {
      return this.deleteTlsActivationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Show a TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id - Alphanumeric string identifying a TLS activation.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsActivationResponse} and HTTP response
     */
    getTlsActivationWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_activation_id' is set.
      if (options['tls_activation_id'] === undefined || options['tls_activation_id'] === null) {
        throw new Error("Missing the required parameter 'tls_activation_id'.");
      }

      let pathParams = {
        'tls_activation_id': options['tls_activation_id']
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
      let returnType = TlsActivationResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/activations/{tls_activation_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Show a TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id - Alphanumeric string identifying a TLS activation.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsActivationResponse}
     */
    getTlsActivation(options = {}) {
      return this.getTlsActivationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all TLS activations.
     * @param {Object} options
     * @param {String} [options.filter_tls_certificate_id] - Limit the returned activations to a specific certificate.
     * @param {String} [options.filter_tls_configuration_id] - Limit the returned activations to a specific TLS configuration.
     * @param {String} [options.filter_tls_domain_id] - Limit the returned rules to a specific domain name.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsActivationsResponse} and HTTP response
     */
    listTlsActivationsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[tls_certificate.id]': options['filter_tls_certificate_id'],
        'filter[tls_configuration.id]': options['filter_tls_configuration_id'],
        'filter[tls_domain.id]': options['filter_tls_domain_id'],
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
      let returnType = TlsActivationsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/activations', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all TLS activations.
     * @param {Object} options
     * @param {String} [options.filter_tls_certificate_id] - Limit the returned activations to a specific certificate.
     * @param {String} [options.filter_tls_configuration_id] - Limit the returned activations to a specific TLS configuration.
     * @param {String} [options.filter_tls_domain_id] - Limit the returned rules to a specific domain name.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsActivationsResponse}
     */
    listTlsActivations(options = {}) {
      return this.listTlsActivationsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the certificate used to terminate TLS traffic for the domain associated with this TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id - Alphanumeric string identifying a TLS activation.
     * @param {module:model/TlsActivation} [options.tls_activation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsActivationResponse} and HTTP response
     */
    updateTlsActivationWithHttpInfo(options = {}) {
      let postBody = options['tls_activation'];
      // Verify the required parameter 'tls_activation_id' is set.
      if (options['tls_activation_id'] === undefined || options['tls_activation_id'] === null) {
        throw new Error("Missing the required parameter 'tls_activation_id'.");
      }

      let pathParams = {
        'tls_activation_id': options['tls_activation_id']
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
      let returnType = TlsActivationResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/tls/activations/{tls_activation_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update the certificate used to terminate TLS traffic for the domain associated with this TLS activation.
     * @param {Object} options
     * @param {String} options.tls_activation_id - Alphanumeric string identifying a TLS activation.
     * @param {module:model/TlsActivation} [options.tls_activation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsActivationResponse}
     */
    updateTlsActivation(options = {}) {
      return this.updateTlsActivationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
