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
import ArcProviderConnectionListItemResponseExtra from './ArcProviderConnectionListItemResponseExtra';
import ArcProviderConnectionResponse from './ArcProviderConnectionResponse';

/**
 * The ArcProviderConnectionListItemResponse model module.
 * @module model/ArcProviderConnectionListItemResponse
 * @version 17.0.0
 */
class ArcProviderConnectionListItemResponse {
    /**
     * Constructs a new <code>ArcProviderConnectionListItemResponse</code>.
     * @alias module:model/ArcProviderConnectionListItemResponse
     * @implements module:model/ArcProviderConnectionResponse
     * @implements module:model/ArcProviderConnectionListItemResponseExtra
     * @param id {String} The unique identifier of the provider connection.
     * @param secret_id {String} An opaque identifier for the secret material backing this connection. Not the secret itself.
     * @param name {String} The display name of the provider connection.
     * @param models {Array.<String>} The AI model identifiers this connection is allowed to use.
     * @param auth_type {module:model/ArcProviderConnectionListItemResponse.AuthTypeEnum} The authentication type for this connection.
     * @param created_at {Date} The date and time the connection was created, in RFC 3339 format.
     * @param updated_at {Date} The date and time the connection was last updated, in RFC 3339 format.
     */
    constructor(id, secret_id, name, models, auth_type, created_at, updated_at) { 
        ArcProviderConnectionResponse.initialize(this, id, secret_id, name, models, auth_type, created_at, updated_at);ArcProviderConnectionListItemResponseExtra.initialize(this);
        ArcProviderConnectionListItemResponse.initialize(this, id, secret_id, name, models, auth_type, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, secret_id, name, models, auth_type, created_at, updated_at) { 
        obj['id'] = id;
        obj['secret_id'] = secret_id;
        obj['name'] = name;
        obj['models'] = models;
        obj['auth_type'] = auth_type;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>ArcProviderConnectionListItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcProviderConnectionListItemResponse} obj Optional instance to populate.
     * @return {module:model/ArcProviderConnectionListItemResponse} The populated <code>ArcProviderConnectionListItemResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcProviderConnectionListItemResponse();
            ArcProviderConnectionResponse.constructFromObject(data, obj);
            ArcProviderConnectionListItemResponseExtra.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('base_url')) {
                obj['base_url'] = ApiClient.convertToType(data['base_url'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The unique identifier of the provider connection.
 * @member {String} id
 */
ArcProviderConnectionListItemResponse.prototype['id'] = undefined;

/**
 * An opaque identifier for the secret material backing this connection. Not the secret itself.
 * @member {String} secret_id
 */
ArcProviderConnectionListItemResponse.prototype['secret_id'] = undefined;

/**
 * The display name of the provider connection.
 * @member {String} name
 */
ArcProviderConnectionListItemResponse.prototype['name'] = undefined;

/**
 * The AI model identifiers this connection is allowed to use.
 * @member {Array.<String>} models
 */
ArcProviderConnectionListItemResponse.prototype['models'] = undefined;

/**
 * The authentication type for this connection.
 * @member {module:model/ArcProviderConnectionListItemResponse.AuthTypeEnum} auth_type
 */
ArcProviderConnectionListItemResponse.prototype['auth_type'] = undefined;

/**
 * The date and time the connection was created, in RFC 3339 format.
 * @member {Date} created_at
 */
ArcProviderConnectionListItemResponse.prototype['created_at'] = undefined;

/**
 * The date and time the connection was last updated, in RFC 3339 format.
 * @member {Date} updated_at
 */
ArcProviderConnectionListItemResponse.prototype['updated_at'] = undefined;

/**
 * The base URL of the provider's API. Present only for `api-key` connections.
 * @member {String} base_url
 */
ArcProviderConnectionListItemResponse.prototype['base_url'] = undefined;

/**
 * The AWS region for Bedrock API requests. Present only for `aws-iam` connections.
 * @member {String} region
 */
ArcProviderConnectionListItemResponse.prototype['region'] = undefined;

/**
 * The date and time the connection was deleted, in RFC 3339 format. Present only for deleted connections, which are returned only when `include_deleted` is `true`.
 * @member {Date} deleted_at
 */
ArcProviderConnectionListItemResponse.prototype['deleted_at'] = undefined;


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
// Implement ArcProviderConnectionListItemResponseExtra interface:
/**
 * The date and time the connection was deleted, in RFC 3339 format. Present only for deleted connections, which are returned only when `include_deleted` is `true`.
 * @member {Date} deleted_at
 */
ArcProviderConnectionListItemResponseExtra.prototype['deleted_at'] = undefined;



/**
 * Allowed values for the <code>auth_type</code> property.
 * @enum {String}
 * @readonly
 */
ArcProviderConnectionListItemResponse['AuthTypeEnum'] = {

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



export default ArcProviderConnectionListItemResponse;

