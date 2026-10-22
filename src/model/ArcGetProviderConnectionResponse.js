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
import ArcGetProviderConnectionResponseExtra from './ArcGetProviderConnectionResponseExtra';
import ArcProviderConnectionResponse from './ArcProviderConnectionResponse';

/**
 * The ArcGetProviderConnectionResponse model module.
 * @module model/ArcGetProviderConnectionResponse
 * @version 17.0.0
 */
class ArcGetProviderConnectionResponse {
    /**
     * Constructs a new <code>ArcGetProviderConnectionResponse</code>.
     * @alias module:model/ArcGetProviderConnectionResponse
     * @implements module:model/ArcProviderConnectionResponse
     * @implements module:model/ArcGetProviderConnectionResponseExtra
     * @param id {String} The unique identifier of the provider connection.
     * @param secret_id {String} An opaque identifier for the secret material backing this connection. Not the secret itself.
     * @param name {String} The display name of the provider connection.
     * @param models {Array.<String>} The AI model identifiers this connection is allowed to use.
     * @param auth_type {module:model/ArcGetProviderConnectionResponse.AuthTypeEnum} The authentication type for this connection.
     * @param created_at {Date} The date and time the connection was created, in RFC 3339 format.
     * @param updated_at {Date} The date and time the connection was last updated, in RFC 3339 format.
     * @param virtual_key_ids {Array.<String>} The IDs of the active virtual keys whose failover policy references this connection. Empty if no virtual key references it.
     */
    constructor(id, secret_id, name, models, auth_type, created_at, updated_at, virtual_key_ids) { 
        ArcProviderConnectionResponse.initialize(this, id, secret_id, name, models, auth_type, created_at, updated_at);ArcGetProviderConnectionResponseExtra.initialize(this, virtual_key_ids);
        ArcGetProviderConnectionResponse.initialize(this, id, secret_id, name, models, auth_type, created_at, updated_at, virtual_key_ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, secret_id, name, models, auth_type, created_at, updated_at, virtual_key_ids) { 
        obj['id'] = id;
        obj['secret_id'] = secret_id;
        obj['name'] = name;
        obj['models'] = models;
        obj['auth_type'] = auth_type;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
        obj['virtual_key_ids'] = virtual_key_ids;
    }

    /**
     * Constructs a <code>ArcGetProviderConnectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcGetProviderConnectionResponse} obj Optional instance to populate.
     * @return {module:model/ArcGetProviderConnectionResponse} The populated <code>ArcGetProviderConnectionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcGetProviderConnectionResponse();
            ArcProviderConnectionResponse.constructFromObject(data, obj);
            ArcGetProviderConnectionResponseExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('secret_id')) {
                obj['secret_id'] = ApiClient.convertToType(data['secret_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('models')) {
                obj['models'] = ApiClient.convertToType(data['models'], ['String']);
            }
            if (data.hasOwnProperty('auth_type')) {
                obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('virtual_key_ids')) {
                obj['virtual_key_ids'] = ApiClient.convertToType(data['virtual_key_ids'], ['String']);
            }
            if (data.hasOwnProperty('base_url')) {
                obj['base_url'] = ApiClient.convertToType(data['base_url'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The unique identifier of the provider connection.
 * @member {String} id
 */
ArcGetProviderConnectionResponse.prototype['id'] = undefined;

/**
 * An opaque identifier for the secret material backing this connection. Not the secret itself.
 * @member {String} secret_id
 */
ArcGetProviderConnectionResponse.prototype['secret_id'] = undefined;

/**
 * The display name of the provider connection.
 * @member {String} name
 */
ArcGetProviderConnectionResponse.prototype['name'] = undefined;

/**
 * The AI model identifiers this connection is allowed to use.
 * @member {Array.<String>} models
 */
ArcGetProviderConnectionResponse.prototype['models'] = undefined;

/**
 * The authentication type for this connection.
 * @member {module:model/ArcGetProviderConnectionResponse.AuthTypeEnum} auth_type
 */
ArcGetProviderConnectionResponse.prototype['auth_type'] = undefined;

/**
 * The date and time the connection was created, in RFC 3339 format.
 * @member {Date} created_at
 */
ArcGetProviderConnectionResponse.prototype['created_at'] = undefined;

/**
 * The date and time the connection was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
ArcGetProviderConnectionResponse.prototype['updated_at'] = undefined;

/**
 * The IDs of the active virtual keys whose failover policy references this connection. Empty if no virtual key references it.
 * @member {Array.<String>} virtual_key_ids
 */
ArcGetProviderConnectionResponse.prototype['virtual_key_ids'] = undefined;

/**
 * The base URL of the provider's API. Present only for `api-key` connections.
 * @member {String} base_url
 */
ArcGetProviderConnectionResponse.prototype['base_url'] = undefined;

/**
 * The AWS region for Bedrock API requests. Present only for `aws-iam` connections.
 * @member {String} region
 */
ArcGetProviderConnectionResponse.prototype['region'] = undefined;


// Implement ArcProviderConnectionResponse interface:
/**
 * The unique identifier of the provider connection.
 * @member {String} id
 */
ArcProviderConnectionResponse.prototype['id'] = undefined;
/**
 * An opaque identifier for the secret material backing this connection. Not the secret itself.
 * @member {String} secret_id
 */
ArcProviderConnectionResponse.prototype['secret_id'] = undefined;
/**
 * The display name of the provider connection.
 * @member {String} name
 */
ArcProviderConnectionResponse.prototype['name'] = undefined;
/**
 * The AI model identifiers this connection is allowed to use.
 * @member {Array.<String>} models
 */
ArcProviderConnectionResponse.prototype['models'] = undefined;
/**
 * The authentication type for this connection.
 * @member {module:model/ArcProviderConnectionResponse.AuthTypeEnum} auth_type
 */
ArcProviderConnectionResponse.prototype['auth_type'] = undefined;
/**
 * The date and time the connection was created, in RFC 3339 format.
 * @member {Date} created_at
 */
ArcProviderConnectionResponse.prototype['created_at'] = undefined;
/**
 * The date and time the connection was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
ArcProviderConnectionResponse.prototype['updated_at'] = undefined;
/**
 * The base URL of the provider's API. Present only for `api-key` connections.
 * @member {String} base_url
 */
ArcProviderConnectionResponse.prototype['base_url'] = undefined;
/**
 * The AWS region for Bedrock API requests. Present only for `aws-iam` connections.
 * @member {String} region
 */
ArcProviderConnectionResponse.prototype['region'] = undefined;
// Implement ArcGetProviderConnectionResponseExtra interface:
/**
 * The IDs of the active virtual keys whose failover policy references this connection. Empty if no virtual key references it.
 * @member {Array.<String>} virtual_key_ids
 */
ArcGetProviderConnectionResponseExtra.prototype['virtual_key_ids'] = undefined;



/**
 * Allowed values for the <code>auth_type</code> property.
 * @enum {String}
 * @readonly
 */
ArcGetProviderConnectionResponse['AuthTypeEnum'] = {

    /**
     * value: "api-key"
     * @const
     */
    "api-key": "api-key",

    /**
     * value: "aws-iam"
     * @const
     */
    "aws-iam": "aws-iam"
};



export default ArcGetProviderConnectionResponse;

