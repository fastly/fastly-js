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
import AclEntry from '../model/AclEntry';
import AclEntryResponse from '../model/AclEntryResponse';
import BulkUpdateAclEntriesRequest from '../model/BulkUpdateAclEntriesRequest';
import InlineResponse200 from '../model/InlineResponse200';

/**
* AclEntry service.
* @module api/AclEntryApi
* @version v3.1.0
*/
export default class AclEntryApi {

    /**
    * Constructs a new AclEntryApi. 
    * @alias module:api/AclEntryApi
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
     * Update multiple ACL entries on the same ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {module:model/BulkUpdateAclEntriesRequest} [options.bulk_update_acl_entries_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    bulkUpdateAclEntriesWithHttpInfo(options = {}) {
      let postBody = options['bulk_update_acl_entries_request'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id']
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
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/service/{service_id}/acl/{acl_id}/entries', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update multiple ACL entries on the same ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {module:model/BulkUpdateAclEntriesRequest} [options.bulk_update_acl_entries_request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    bulkUpdateAclEntries(options = {}) {
      return this.bulkUpdateAclEntriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Add an ACL entry to an ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {module:model/AclEntry} [options.acl_entry]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AclEntryResponse} and HTTP response
     */
    createAclEntryWithHttpInfo(options = {}) {
      let postBody = options['acl_entry'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id']
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
      let returnType = AclEntryResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/acl/{acl_id}/entry', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add an ACL entry to an ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {module:model/AclEntry} [options.acl_entry]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AclEntryResponse}
     */
    createAclEntry(options = {}) {
      return this.createAclEntryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete an ACL entry from a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {String} options.acl_entry_id - Alphanumeric string identifying an ACL Entry.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteAclEntryWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }
      // Verify the required parameter 'acl_entry_id' is set.
      if (options['acl_entry_id'] === undefined || options['acl_entry_id'] === null) {
        throw new Error("Missing the required parameter 'acl_entry_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id'],
        'acl_entry_id': options['acl_entry_id']
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
        '/service/{service_id}/acl/{acl_id}/entry/{acl_entry_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an ACL entry from a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {String} options.acl_entry_id - Alphanumeric string identifying an ACL Entry.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteAclEntry(options = {}) {
      return this.deleteAclEntryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a single ACL entry.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {String} options.acl_entry_id - Alphanumeric string identifying an ACL Entry.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AclEntryResponse} and HTTP response
     */
    getAclEntryWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }
      // Verify the required parameter 'acl_entry_id' is set.
      if (options['acl_entry_id'] === undefined || options['acl_entry_id'] === null) {
        throw new Error("Missing the required parameter 'acl_entry_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id'],
        'acl_entry_id': options['acl_entry_id']
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
      let returnType = AclEntryResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/acl/{acl_id}/entry/{acl_entry_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a single ACL entry.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {String} options.acl_entry_id - Alphanumeric string identifying an ACL Entry.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AclEntryResponse}
     */
    getAclEntry(options = {}) {
      return this.getAclEntryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List ACL entries for a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AclEntryResponse>} and HTTP response
     */
    listAclEntriesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id']
      };
      let queryParams = {
        'page': options['page'],
        'per_page': options['per_page'],
        'sort': options['sort'],
        'direction': options['direction']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AclEntryResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/acl/{acl_id}/entries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List ACL entries for a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {Number} [options.page] - Current page.
     * @param {Number} [options.per_page=20] - Number of records per page.
     * @param {String} [options.sort='created'] - Field on which to sort.
     * @param {module:model/String} [options.direction='ascend'] - Direction in which to sort results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AclEntryResponse>}
     */
    listAclEntries(options = {}) {
      return this.listAclEntriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update an ACL entry for a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {String} options.acl_entry_id - Alphanumeric string identifying an ACL Entry.
     * @param {module:model/AclEntry} [options.acl_entry]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AclEntryResponse} and HTTP response
     */
    updateAclEntryWithHttpInfo(options = {}) {
      let postBody = options['acl_entry'];
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'acl_id' is set.
      if (options['acl_id'] === undefined || options['acl_id'] === null) {
        throw new Error("Missing the required parameter 'acl_id'.");
      }
      // Verify the required parameter 'acl_entry_id' is set.
      if (options['acl_entry_id'] === undefined || options['acl_entry_id'] === null) {
        throw new Error("Missing the required parameter 'acl_entry_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'acl_id': options['acl_id'],
        'acl_entry_id': options['acl_entry_id']
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
      let returnType = AclEntryResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/acl/{acl_id}/entry/{acl_entry_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an ACL entry for a specified ACL.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.acl_id - Alphanumeric string identifying a ACL.
     * @param {String} options.acl_entry_id - Alphanumeric string identifying an ACL Entry.
     * @param {module:model/AclEntry} [options.acl_entry]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AclEntryResponse}
     */
    updateAclEntry(options = {}) {
      return this.updateAclEntryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
