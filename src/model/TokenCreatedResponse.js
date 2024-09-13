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

import ApiClient from '../ApiClient';
import TokenCreatedResponseAllOf from './TokenCreatedResponseAllOf';
import TokenResponse from './TokenResponse';

/**
 * The TokenCreatedResponse model module.
 * @module model/TokenCreatedResponse
 * @version 7.9.0
 */
class TokenCreatedResponse {
    /**
     * Constructs a new <code>TokenCreatedResponse</code>.
     * @alias module:model/TokenCreatedResponse
     * @implements module:model/TokenResponse
     * @implements module:model/TokenCreatedResponseAllOf
     */
    constructor() { 
        TokenResponse.initialize(this);TokenCreatedResponseAllOf.initialize(this);
        TokenCreatedResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenCreatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenCreatedResponse} obj Optional instance to populate.
     * @return {module:model/TokenCreatedResponse} The populated <code>TokenCreatedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenCreatedResponse();
            TokenResponse.constructFromObject(data, obj);
            TokenCreatedResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('services')) {
                obj['services'] = ApiClient.convertToType(data['services'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('last_used_at')) {
                obj['last_used_at'] = ApiClient.convertToType(data['last_used_at'], 'String');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * List of alphanumeric strings identifying services (optional). If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */
TokenCreatedResponse.prototype['services'] = undefined;

/**
 * Name of the token.
 * @member {String} name
 */
TokenCreatedResponse.prototype['name'] = undefined;

/**
 * Space-delimited list of authorization scope.
 * @member {module:model/TokenCreatedResponse.ScopeEnum} scope
 * @default 'global'
 */
TokenCreatedResponse.prototype['scope'] = undefined;

/**
 * Time-stamp (UTC) of when the token was created.
 * @member {String} created_at
 */
TokenCreatedResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
TokenCreatedResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TokenCreatedResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} id
 */
TokenCreatedResponse.prototype['id'] = undefined;

/**
 * @member {String} user_id
 */
TokenCreatedResponse.prototype['user_id'] = undefined;

/**
 * Time-stamp (UTC) of when the token was last used.
 * @member {String} last_used_at
 */
TokenCreatedResponse.prototype['last_used_at'] = undefined;

/**
 * Time-stamp (UTC) of when the token will expire (optional).
 * @member {String} expires_at
 */
TokenCreatedResponse.prototype['expires_at'] = undefined;

/**
 * IP Address of the client that last used the token.
 * @member {String} ip
 */
TokenCreatedResponse.prototype['ip'] = undefined;

/**
 * User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */
TokenCreatedResponse.prototype['user_agent'] = undefined;

/**
 * The alphanumeric string for accessing the API (only available on token creation).
 * @member {String} access_token
 */
TokenCreatedResponse.prototype['access_token'] = undefined;


// Implement TokenResponse interface:
/**
 * List of alphanumeric strings identifying services (optional). If no services are specified, the token will have access to all services on the account. 
 * @member {Array.<String>} services
 */
TokenResponse.prototype['services'] = undefined;
/**
 * Name of the token.
 * @member {String} name
 */
TokenResponse.prototype['name'] = undefined;
/**
 * Space-delimited list of authorization scope.
 * @member {module:model/TokenResponse.ScopeEnum} scope
 * @default 'global'
 */
TokenResponse.prototype['scope'] = undefined;
/**
 * Time-stamp (UTC) of when the token was created.
 * @member {String} created_at
 */
TokenResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
TokenResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TokenResponse.prototype['updated_at'] = undefined;
/**
 * @member {String} id
 */
TokenResponse.prototype['id'] = undefined;
/**
 * @member {String} user_id
 */
TokenResponse.prototype['user_id'] = undefined;
/**
 * Time-stamp (UTC) of when the token was last used.
 * @member {String} last_used_at
 */
TokenResponse.prototype['last_used_at'] = undefined;
/**
 * Time-stamp (UTC) of when the token will expire (optional).
 * @member {String} expires_at
 */
TokenResponse.prototype['expires_at'] = undefined;
/**
 * IP Address of the client that last used the token.
 * @member {String} ip
 */
TokenResponse.prototype['ip'] = undefined;
/**
 * User-Agent header of the client that last used the token.
 * @member {String} user_agent
 */
TokenResponse.prototype['user_agent'] = undefined;
// Implement TokenCreatedResponseAllOf interface:
/**
 * The alphanumeric string for accessing the API (only available on token creation).
 * @member {String} access_token
 */
TokenCreatedResponseAllOf.prototype['access_token'] = undefined;



/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */
TokenCreatedResponse['ScopeEnum'] = {

    /**
     * value: "global"
     * @const
     */
    "global": "global",

    /**
     * value: "purge_select"
     * @const
     */
    "purge_select": "purge_select",

    /**
     * value: "purge_all"
     * @const
     */
    "purge_all": "purge_all",

    /**
     * value: "global:read"
     * @const
     */
    "global:read": "global:read"
};



export default TokenCreatedResponse;

