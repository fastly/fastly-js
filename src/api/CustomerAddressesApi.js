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
import CustomerAddress from '../model/CustomerAddress';
import Error from '../model/Error';
import InlineResponse201 from '../model/InlineResponse201';
import ListCustomerAddressesResponse from '../model/ListCustomerAddressesResponse';

/**
* CustomerAddresses service.
* @module api/CustomerAddressesApi
* @version 7.9.0
*/
export default class CustomerAddressesApi {

    /**
    * Constructs a new CustomerAddressesApi. 
    * @alias module:api/CustomerAddressesApi
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
     * Creates an address associated with a customer account.
     * @param {Object} options
     * @param {module:model/CustomerAddress} options.customer_address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */
    createCustomerAddressWithHttpInfo(options = {}) {
      let postBody = options['customer_address'];
      // Verify the required parameter 'customer_address' is set.
      if (options['customer_address'] === undefined || options['customer_address'] === null) {
        throw new Error("Missing the required parameter 'customer_address'.");
      }

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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse201;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/billing/v3/customer-addresses', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Creates an address associated with a customer account.
     * @param {Object} options
     * @param {module:model/CustomerAddress} options.customer_address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */
    createCustomerAddress(options = {}) {
      return this.createCustomerAddressWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Return the list of addresses associated with a customer account.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCustomerAddressesResponse} and HTTP response
     */
    listCustomerAddressesWithHttpInfo(options = {}) {
      let postBody = null;

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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListCustomerAddressesResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/billing/v3/customer-addresses', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Return the list of addresses associated with a customer account.
     * @param {Object} options
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCustomerAddressesResponse}
     */
    listCustomerAddresses(options = {}) {
      return this.listCustomerAddressesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Updates an address associated with a customer account.
     * @param {Object} options
     * @param {String} options.type - Alphanumeric type of the address being modified.
     * @param {module:model/CustomerAddress} options.customer_address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateCustomerAddressWithHttpInfo(options = {}) {
      let postBody = options['customer_address'];
      // Verify the required parameter 'type' is set.
      if (options['type'] === undefined || options['type'] === null) {
        throw new Error("Missing the required parameter 'type'.");
      }
      // Verify the required parameter 'customer_address' is set.
      if (options['customer_address'] === undefined || options['customer_address'] === null) {
        throw new Error("Missing the required parameter 'customer_address'.");
      }

      let pathParams = {
        'type': options['type']
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
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
        '/billing/v3/customer-addresses/{type}', 'PUT',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Updates an address associated with a customer account.
     * @param {Object} options
     * @param {String} options.type - Alphanumeric type of the address being modified.
     * @param {module:model/CustomerAddress} options.customer_address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateCustomerAddress(options = {}) {
      return this.updateCustomerAddressWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
