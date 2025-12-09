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
import InlineResponse2004 from '../model/InlineResponse2004';
import RequestBodyForCreate from '../model/RequestBodyForCreate';
import RequestBodyForUpdate from '../model/RequestBodyForUpdate';
import SuccessfulResponseAsObject from '../model/SuccessfulResponseAsObject';

/**
* DmDomains service.
* @module api/DmDomainsApi
* @version 14.1.0
*/
export default class DmDomainsApi {

    /**
    * Constructs a new DmDomainsApi. 
    * @alias module:api/DmDomainsApi
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
     * Create a domain
     * @param {Object} options
     * @param {module:model/RequestBodyForCreate} [options.request_body_for_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SuccessfulResponseAsObject} and HTTP response
     */
    createDmDomainWithHttpInfo(options = {}) {
      let postBody = options['request_body_for_create'];

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
      let returnType = SuccessfulResponseAsObject;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/domains', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Create a domain
     * @param {Object} options
     * @param {module:model/RequestBodyForCreate} [options.request_body_for_create]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SuccessfulResponseAsObject}
     */
    createDmDomain(options = {}) {
      return this.createDmDomainWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a domain
     * @param {Object} options
     * @param {String} options.domain_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDmDomainWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'domain_id' is set.
      if (options['domain_id'] === undefined || options['domain_id'] === null) {
        throw new Error("Missing the required parameter 'domain_id'.");
      }

      let pathParams = {
        'domain_id': options['domain_id']
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
        '/domain-management/v1/domains/{domain_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Delete a domain
     * @param {Object} options
     * @param {String} options.domain_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDmDomain(options = {}) {
      return this.deleteDmDomainWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Show a domain
     * @param {Object} options
     * @param {String} options.domain_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SuccessfulResponseAsObject} and HTTP response
     */
    getDmDomainWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'domain_id' is set.
      if (options['domain_id'] === undefined || options['domain_id'] === null) {
        throw new Error("Missing the required parameter 'domain_id'.");
      }

      let pathParams = {
        'domain_id': options['domain_id']
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
      let returnType = SuccessfulResponseAsObject;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/domains/{domain_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Show a domain
     * @param {Object} options
     * @param {String} options.domain_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SuccessfulResponseAsObject}
     */
    getDmDomain(options = {}) {
      return this.getDmDomainWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all domains
     * @param {Object} options
     * @param {String} [options.fqdn]
     * @param {String} [options.service_id] - Filter results based on a service_id.
     * @param {module:model/String} [options.sort='fqdn'] - The order in which to list the results.
     * @param {Boolean} [options.activated]
     * @param {Boolean} [options.verified]
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    listDmDomainsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'fqdn': options['fqdn'],
        'service_id': options['service_id'],
        'sort': options['sort'],
        'activated': options['activated'],
        'verified': options['verified'],
        'cursor': options['cursor'],
        'limit': options['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/domains', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all domains
     * @param {Object} options
     * @param {String} [options.fqdn]
     * @param {String} [options.service_id] - Filter results based on a service_id.
     * @param {module:model/String} [options.sort='fqdn'] - The order in which to list the results.
     * @param {Boolean} [options.activated]
     * @param {Boolean} [options.verified]
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    listDmDomains(options = {}) {
      return this.listDmDomainsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a domain
     * @param {Object} options
     * @param {String} options.domain_id
     * @param {module:model/RequestBodyForUpdate} [options.request_body_for_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SuccessfulResponseAsObject} and HTTP response
     */
    updateDmDomainWithHttpInfo(options = {}) {
      let postBody = options['request_body_for_update'];
      // Verify the required parameter 'domain_id' is set.
      if (options['domain_id'] === undefined || options['domain_id'] === null) {
        throw new Error("Missing the required parameter 'domain_id'.");
      }

      let pathParams = {
        'domain_id': options['domain_id']
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
      let returnType = SuccessfulResponseAsObject;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/domain-management/v1/domains/{domain_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update a domain
     * @param {Object} options
     * @param {String} options.domain_id
     * @param {module:model/RequestBodyForUpdate} [options.request_body_for_update]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SuccessfulResponseAsObject}
     */
    updateDmDomain(options = {}) {
      return this.updateDmDomainWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
