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
import DdosProtectionError from '../model/DdosProtectionError';
import DdosProtectionEvent from '../model/DdosProtectionEvent';
import DdosProtectionNotAuthenticated from '../model/DdosProtectionNotAuthenticated';
import DdosProtectionNotFound from '../model/DdosProtectionNotFound';
import DdosProtectionRule from '../model/DdosProtectionRule';
import DdosProtectionTrafficStats from '../model/DdosProtectionTrafficStats';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';

/**
* DdosProtection service.
* @module api/DdosProtectionApi
* @version 12.1.0
*/
export default class DdosProtectionApi {

    /**
    * Constructs a new DdosProtectionApi. 
    * @alias module:api/DdosProtectionApi
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
     * Get event by ID.
     * @param {Object} options
     * @param {String} options.event_id - Unique ID of the event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DdosProtectionEvent} and HTTP response
     */
    ddosProtectionEventGetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'event_id' is set.
      if (options['event_id'] === undefined || options['event_id'] === null) {
        throw new Error("Missing the required parameter 'event_id'.");
      }

      let pathParams = {
        'event_id': options['event_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = DdosProtectionEvent;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ddos-protection/v1/events/{event_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get event by ID.
     * @param {Object} options
     * @param {String} options.event_id - Unique ID of the event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DdosProtectionEvent}
     */
    ddosProtectionEventGet(options = {}) {
      return this.ddosProtectionEventGetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get events.
     * @param {Object} options
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @param {String} [options.service_id] - Filter results based on a service_id.
     * @param {Date} [options.from] - Represents the start of a date-time range expressed in RFC 3339 format.
     * @param {Date} [options.to] - Represents the end of a date-time range expressed in RFC 3339 format.
     * @param {String} [options.name]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    ddosProtectionEventListWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'cursor': options['cursor'],
        'limit': options['limit'],
        'service_id': options['service_id'],
        'from': options['from'],
        'to': options['to'],
        'name': options['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse2002;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ddos-protection/v1/events', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get events.
     * @param {Object} options
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @param {String} [options.service_id] - Filter results based on a service_id.
     * @param {Date} [options.from] - Represents the start of a date-time range expressed in RFC 3339 format.
     * @param {Date} [options.to] - Represents the end of a date-time range expressed in RFC 3339 format.
     * @param {String} [options.name]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    ddosProtectionEventList(options = {}) {
      return this.ddosProtectionEventListWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get all rules for an event.
     * @param {Object} options
     * @param {String} options.event_id - Unique ID of the event.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    ddosProtectionEventRuleListWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'event_id' is set.
      if (options['event_id'] === undefined || options['event_id'] === null) {
        throw new Error("Missing the required parameter 'event_id'.");
      }

      let pathParams = {
        'event_id': options['event_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'cursor': options['cursor'],
        'limit': options['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = InlineResponse2003;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ddos-protection/v1/events/{event_id}/rules', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get all rules for an event.
     * @param {Object} options
     * @param {String} options.event_id - Unique ID of the event.
     * @param {String} [options.cursor] - Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty.
     * @param {Number} [options.limit=20] - Limit how many results are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    ddosProtectionEventRuleList(options = {}) {
      return this.ddosProtectionEventRuleListWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a rule by ID.
     * @param {Object} options
     * @param {String} options.rule_id - Unique ID of the rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DdosProtectionRule} and HTTP response
     */
    ddosProtectionRuleGetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'rule_id' is set.
      if (options['rule_id'] === undefined || options['rule_id'] === null) {
        throw new Error("Missing the required parameter 'rule_id'.");
      }

      let pathParams = {
        'rule_id': options['rule_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = DdosProtectionRule;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ddos-protection/v1/rules/{rule_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get a rule by ID.
     * @param {Object} options
     * @param {String} options.rule_id - Unique ID of the rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DdosProtectionRule}
     */
    ddosProtectionRuleGet(options = {}) {
      return this.ddosProtectionRuleGetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get traffic stats for a rule.
     * @param {Object} options
     * @param {String} options.event_id - Unique ID of the event.
     * @param {String} options.rule_id - Unique ID of the rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DdosProtectionTrafficStats} and HTTP response
     */
    ddosProtectionTrafficStatsRuleGetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'event_id' is set.
      if (options['event_id'] === undefined || options['event_id'] === null) {
        throw new Error("Missing the required parameter 'event_id'.");
      }
      // Verify the required parameter 'rule_id' is set.
      if (options['rule_id'] === undefined || options['rule_id'] === null) {
        throw new Error("Missing the required parameter 'rule_id'.");
      }

      let pathParams = {
        'event_id': options['event_id'],
        'rule_id': options['rule_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = DdosProtectionTrafficStats;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/ddos-protection/v1/events/{event_id}/rules/{rule_id}/traffic-stats', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get traffic stats for a rule.
     * @param {Object} options
     * @param {String} options.event_id - Unique ID of the event.
     * @param {String} options.rule_id - Unique ID of the rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DdosProtectionTrafficStats}
     */
    ddosProtectionTrafficStatsRuleGet(options = {}) {
      return this.ddosProtectionTrafficStatsRuleGetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
