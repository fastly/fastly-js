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
import BotManagementBot from '../model/BotManagementBot';
import BotManagementBotResponse from '../model/BotManagementBotResponse';
import BotManagementBotsResponse from '../model/BotManagementBotsResponse';
import BotManagementCategoriesResponse from '../model/BotManagementCategoriesResponse';
import BotManagementCategory from '../model/BotManagementCategory';
import BotManagementCategoryResponse from '../model/BotManagementCategoryResponse';
import BotManagementInvalidRequestError from '../model/BotManagementInvalidRequestError';
import BotManagementNotAllowedError from '../model/BotManagementNotAllowedError';
import BotManagementNotAuthenticatedError from '../model/BotManagementNotAuthenticatedError';
import BotManagementNotFoundError from '../model/BotManagementNotFoundError';
import BotManagementRateLimitError from '../model/BotManagementRateLimitError';
import BotManagementWorkspace from '../model/BotManagementWorkspace';
import BotManagementWorkspaceBotsResponse from '../model/BotManagementWorkspaceBotsResponse';
import BotManagementWorkspaceResponse from '../model/BotManagementWorkspaceResponse';
import BotManagementWorkspacesResponse from '../model/BotManagementWorkspacesResponse';

/**
* BotManagement service.
* @module api/BotManagementApi
* @version 17.0.0
*/
export default class BotManagementApi {

    /**
    * Constructs a new BotManagementApi. 
    * @alias module:api/BotManagementApi
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
     * Get the attributes of a bot in a category.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @param {String} options.bot_id - The ID of the bot.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementBotResponse} and HTTP response
     */
    botManagementGetBotWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }
      // Verify the required parameter 'category_id' is set.
      if (options['category_id'] === undefined || options['category_id'] === null) {
        throw new Error("Missing the required parameter 'category_id'.");
      }
      // Verify the required parameter 'bot_id' is set.
      if (options['bot_id'] === undefined || options['bot_id'] === null) {
        throw new Error("Missing the required parameter 'bot_id'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id'],
        'category_id': options['category_id'],
        'bot_id': options['bot_id']
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
      let returnType = BotManagementBotResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces/{workspace_id}/policy/categories/{category_id}/bots/{bot_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get the attributes of a bot in a category.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @param {String} options.bot_id - The ID of the bot.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementBotResponse}
     */
    botManagementGetBot(options = {}) {
      return this.botManagementGetBotWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the attributes of a bot category.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementCategoryResponse} and HTTP response
     */
    botManagementGetCategoryWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }
      // Verify the required parameter 'category_id' is set.
      if (options['category_id'] === undefined || options['category_id'] === null) {
        throw new Error("Missing the required parameter 'category_id'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id'],
        'category_id': options['category_id']
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
      let returnType = BotManagementCategoryResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces/{workspace_id}/policy/categories/{category_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Get the attributes of a bot category.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementCategoryResponse}
     */
    botManagementGetCategory(options = {}) {
      return this.botManagementGetCategoryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Retrieve a bot management workspace.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementWorkspaceResponse} and HTTP response
     */
    botManagementGetWorkspaceWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id']
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
      let returnType = BotManagementWorkspaceResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces/{workspace_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Retrieve a bot management workspace.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementWorkspaceResponse}
     */
    botManagementGetWorkspace(options = {}) {
      return this.botManagementGetWorkspaceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all bots in a workspace's policy across all categories.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementWorkspaceBotsResponse} and HTTP response
     */
    botManagementListBotsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = BotManagementWorkspaceBotsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces/{workspace_id}/policy/bots', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all bots in a workspace's policy across all categories.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementWorkspaceBotsResponse}
     */
    botManagementListBots(options = {}) {
      return this.botManagementListBotsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all bot categories in a workspace's policy. Each category has an action that applies to every bot in the category. To list the bots themselves, use [list all bots in a workspace](#bot-management-list-bots) or [list bots in a category](#bot-management-list-category-bots).
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementCategoriesResponse} and HTTP response
     */
    botManagementListCategoriesWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = BotManagementCategoriesResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces/{workspace_id}/policy/categories', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all bot categories in a workspace's policy. Each category has an action that applies to every bot in the category. To list the bots themselves, use [list all bots in a workspace](#bot-management-list-bots) or [list bots in a category](#bot-management-list-category-bots).
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementCategoriesResponse}
     */
    botManagementListCategories(options = {}) {
      return this.botManagementListCategoriesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all bots in a bot category.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementBotsResponse} and HTTP response
     */
    botManagementListCategoryBotsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }
      // Verify the required parameter 'category_id' is set.
      if (options['category_id'] === undefined || options['category_id'] === null) {
        throw new Error("Missing the required parameter 'category_id'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id'],
        'category_id': options['category_id']
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = BotManagementBotsResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces/{workspace_id}/policy/categories/{category_id}/bots', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List all bots in a bot category.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementBotsResponse}
     */
    botManagementListCategoryBots(options = {}) {
      return this.botManagementListCategoryBotsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List bot management workspaces.
     * @param {Object} options
     * @param {String} [options.service_id] - Filter results to the workspace attached to this service. Returns an empty list if the service is not attached to a workspace.
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementWorkspacesResponse} and HTTP response
     */
    botManagementListWorkspacesWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'service_id': options['service_id'],
        'limit': options['limit'],
        'cursor': options['cursor']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = BotManagementWorkspacesResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * List bot management workspaces.
     * @param {Object} options
     * @param {String} [options.service_id] - Filter results to the workspace attached to this service. Returns an empty list if the service is not attached to a workspace.
     * @param {Number} [options.limit=100] - Limit how many results are returned.
     * @param {String} [options.cursor] - Cursor for pagination. Use the `next_cursor` value from a previous response to request the next page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementWorkspacesResponse}
     */
    botManagementListWorkspaces(options = {}) {
      return this.botManagementListWorkspacesWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Set the action for a bot. Set the action to 'inherit' to apply the category's action or to a specific value to override the category's action.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @param {String} options.bot_id - The ID of the bot.
     * @param {module:model/BotManagementBot} options.bot_management_bot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementBotResponse} and HTTP response
     */
    botManagementUpdateBotWithHttpInfo(options = {}) {
      let postBody = options['bot_management_bot'];
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }
      // Verify the required parameter 'category_id' is set.
      if (options['category_id'] === undefined || options['category_id'] === null) {
        throw new Error("Missing the required parameter 'category_id'.");
      }
      // Verify the required parameter 'bot_id' is set.
      if (options['bot_id'] === undefined || options['bot_id'] === null) {
        throw new Error("Missing the required parameter 'bot_id'.");
      }
      // Verify the required parameter 'bot_management_bot' is set.
      if (options['bot_management_bot'] === undefined || options['bot_management_bot'] === null) {
        throw new Error("Missing the required parameter 'bot_management_bot'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id'],
        'category_id': options['category_id'],
        'bot_id': options['bot_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = BotManagementBotResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces/{workspace_id}/policy/categories/{category_id}/bots/{bot_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Set the action for a bot. Set the action to 'inherit' to apply the category's action or to a specific value to override the category's action.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @param {String} options.bot_id - The ID of the bot.
     * @param {module:model/BotManagementBot} options.bot_management_bot
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementBotResponse}
     */
    botManagementUpdateBot(options = {}) {
      return this.botManagementUpdateBotWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Set the action for a bot category. Every bot in the category configured with the 'inherit' action uses the action set for the category.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @param {module:model/BotManagementCategory} options.bot_management_category
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementCategoryResponse} and HTTP response
     */
    botManagementUpdateCategoryWithHttpInfo(options = {}) {
      let postBody = options['bot_management_category'];
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }
      // Verify the required parameter 'category_id' is set.
      if (options['category_id'] === undefined || options['category_id'] === null) {
        throw new Error("Missing the required parameter 'category_id'.");
      }
      // Verify the required parameter 'bot_management_category' is set.
      if (options['bot_management_category'] === undefined || options['bot_management_category'] === null) {
        throw new Error("Missing the required parameter 'bot_management_category'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id'],
        'category_id': options['category_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = BotManagementCategoryResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces/{workspace_id}/policy/categories/{category_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Set the action for a bot category. Every bot in the category configured with the 'inherit' action uses the action set for the category.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {String} options.category_id - The ID of the bot category.
     * @param {module:model/BotManagementCategory} options.bot_management_category
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementCategoryResponse}
     */
    botManagementUpdateCategory(options = {}) {
      return this.botManagementUpdateCategoryWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the attributes of a bot management workspace.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {module:model/BotManagementWorkspace} options.bot_management_workspace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BotManagementWorkspaceResponse} and HTTP response
     */
    botManagementUpdateWorkspaceWithHttpInfo(options = {}) {
      let postBody = options['bot_management_workspace'];
      // Verify the required parameter 'workspace_id' is set.
      if (options['workspace_id'] === undefined || options['workspace_id'] === null) {
        throw new Error("Missing the required parameter 'workspace_id'.");
      }
      // Verify the required parameter 'bot_management_workspace' is set.
      if (options['bot_management_workspace'] === undefined || options['bot_management_workspace'] === null) {
        throw new Error("Missing the required parameter 'bot_management_workspace'.");
      }

      let pathParams = {
        'workspace_id': options['workspace_id']
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
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = BotManagementWorkspaceResponse;
      let basePaths = ['https://api.fastly.com'];
      let basePath = basePaths[0]; // by default use the first one in "servers" defined in OpenAPI
      if (typeof options['_base_path_index'] !== 'undefined') {
        if (options['_base_path_index']  >= basePaths.length || options['_base_path_index'] <  0) {
          throw new Error("Invalid index " + options['_base_path_index'] + " when selecting the host settings. Must be less than " + basePaths.length);
        }
        basePath = basePaths[options['_base_path_index']];
      }

      return this.apiClient.callApi(
        '/bot-management/v1/workspaces/{workspace_id}', 'PATCH',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, basePath
      );
    }

    /**
     * Update the attributes of a bot management workspace.
     * @param {Object} options
     * @param {String} options.workspace_id - The ID of the bot management workspace.
     * @param {module:model/BotManagementWorkspace} options.bot_management_workspace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BotManagementWorkspaceResponse}
     */
    botManagementUpdateWorkspace(options = {}) {
      return this.botManagementUpdateWorkspaceWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
