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
import InlineResponse200 from '../model/InlineResponse200';
import SchemasContactResponse from '../model/SchemasContactResponse';

/**
* Contact service.
* @module api/ContactApi
* @version 4.0.0
*/
export default class ContactApi {

    /**
    * Constructs a new ContactApi. 
    * @alias module:api/ContactApi
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
     * Delete a contact.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @param {String} options.contact_id - An alphanumeric string identifying the customer contact.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteContactWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'customer_id' is set.
      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }
      // Verify the required parameter 'contact_id' is set.
      if (options['contact_id'] === undefined || options['contact_id'] === null) {
        throw new Error("Missing the required parameter 'contact_id'.");
      }

      let pathParams = {
        'customer_id': options['customer_id'],
        'contact_id': options['contact_id']
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
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/customer/{customer_id}/contact/{contact_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a contact.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @param {String} options.contact_id - An alphanumeric string identifying the customer contact.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteContact(options = {}) {
      return this.deleteContactWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all contacts from a specified customer ID.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SchemasContactResponse>} and HTTP response
     */
    listContactsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'customer_id' is set.
      if (options['customer_id'] === undefined || options['customer_id'] === null) {
        throw new Error("Missing the required parameter 'customer_id'.");
      }

      let pathParams = {
        'customer_id': options['customer_id']
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
      let returnType = [SchemasContactResponse];
      return this.apiClient.callApi(
        '/customer/{customer_id}/contacts', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all contacts from a specified customer ID.
     * @param {Object} options
     * @param {String} options.customer_id - Alphanumeric string identifying the customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SchemasContactResponse>}
     */
    listContacts(options = {}) {
      return this.listContactsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
