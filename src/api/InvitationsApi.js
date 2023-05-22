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
import Invitation from '../model/Invitation';
import InvitationResponse from '../model/InvitationResponse';
import InvitationsResponse from '../model/InvitationsResponse';

/**
* Invitations service.
* @module api/InvitationsApi
* @version 4.1.1
*/
export default class InvitationsApi {

    /**
    * Constructs a new InvitationsApi. 
    * @alias module:api/InvitationsApi
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
     * Create an invitation.
     * @param {Object} options
     * @param {module:model/Invitation} [options.invitation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvitationResponse} and HTTP response
     */
    createInvitationWithHttpInfo(options = {}) {
      let postBody = options['invitation'];

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
      let returnType = InvitationResponse;
      return this.apiClient.callApi(
        '/invitations', 'POST',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an invitation.
     * @param {Object} options
     * @param {module:model/Invitation} [options.invitation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvitationResponse}
     */
    createInvitation(options = {}) {
      return this.createInvitationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete an invitation.
     * @param {Object} options
     * @param {String} options.invitation_id - Alphanumeric string identifying an invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteInvitationWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'invitation_id' is set.
      if (options['invitation_id'] === undefined || options['invitation_id'] === null) {
        throw new Error("Missing the required parameter 'invitation_id'.");
      }

      let pathParams = {
        'invitation_id': options['invitation_id']
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
      return this.apiClient.callApi(
        '/invitations/{invitation_id}', 'DELETE',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an invitation.
     * @param {Object} options
     * @param {String} options.invitation_id - Alphanumeric string identifying an invitation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteInvitation(options = {}) {
      return this.deleteInvitationWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all invitations.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvitationsResponse} and HTTP response
     */
    listInvitationsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
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
      let returnType = InvitationsResponse;
      return this.apiClient.callApi(
        '/invitations', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all invitations.
     * @param {Object} options
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvitationsResponse}
     */
    listInvitations(options = {}) {
      return this.listInvitationsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
