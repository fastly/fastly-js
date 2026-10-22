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
import ArcProviderConnectionApiKey from './ArcProviderConnectionApiKey';
import ArcProviderConnectionAwsIam from './ArcProviderConnectionAwsIam';

/**
 * The ArcProviderConnectionRequest model module.
 * @module model/ArcProviderConnectionRequest
 * @version 17.0.0
 */
class ArcProviderConnectionRequest {
    /**
     * Constructs a new <code>ArcProviderConnectionRequest</code>.
     * @alias module:model/ArcProviderConnectionRequest
     * @implements module:model/ArcProviderConnectionApiKey
     * @implements module:model/ArcProviderConnectionAwsIam
     * @param name {module:model/ArcProviderConnectionRequest.NameEnum} The provider name. Must be `bedrock` for `aws-iam` connections.
     * @param models {Array.<String>} The Bedrock model identifiers this connection is allowed to use.
     * @param base_url {String} The base URL of the provider's API. Must be an absolute `http` or `https` URL and must not end in `/v1`.
     * @param api_key {String} The provider's secret API key.
     * @param auth_type {module:model/ArcProviderConnectionRequest.AuthTypeEnum} The authentication type for this connection.
     * @param customer_role_arn {String} The ARN of the IAM role in your AWS account that AI Runtime Control assumes to access Bedrock. See [get Bedrock setup information](https://www.fastly.com/documentation/reference/api/ai-runtime-control/providers#arc-get-bedrock-setup) for the role ARN and external ID your trust policy must reference.
     * @param region {String} The AWS region for Bedrock API requests.
     */
    constructor(name, models, base_url, api_key, auth_type, customer_role_arn, region) { 
        ArcProviderConnectionApiKey.initialize(this, name, models, base_url, api_key);ArcProviderConnectionAwsIam.initialize(this, name, models, auth_type, customer_role_arn, region);
        ArcProviderConnectionRequest.initialize(this, name, models, base_url, api_key, auth_type, customer_role_arn, region);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, models, base_url, api_key, auth_type, customer_role_arn, region) { 
        obj['name'] = name;
        obj['models'] = models;
        obj['base_url'] = base_url;
        obj['api_key'] = api_key;
        obj['auth_type'] = auth_type;
        obj['customer_role_arn'] = customer_role_arn;
        obj['region'] = region;
    }

    /**
     * Constructs a <code>ArcProviderConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcProviderConnectionRequest} obj Optional instance to populate.
     * @return {module:model/ArcProviderConnectionRequest} The populated <code>ArcProviderConnectionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcProviderConnectionRequest();
            ArcProviderConnectionApiKey.constructFromObject(data, obj);
            ArcProviderConnectionAwsIam.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('models')) {
                obj['models'] = ApiClient.convertToType(data['models'], ['String']);
            }
            if (data.hasOwnProperty('base_url')) {
                obj['base_url'] = ApiClient.convertToType(data['base_url'], 'String');
            }
            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
            }
            if (data.hasOwnProperty('auth_type')) {
                obj['auth_type'] = ApiClient.convertToType(data['auth_type'], 'String');
            }
            if (data.hasOwnProperty('customer_role_arn')) {
                obj['customer_role_arn'] = ApiClient.convertToType(data['customer_role_arn'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The provider name. Must be `bedrock` for `aws-iam` connections.
 * @member {module:model/ArcProviderConnectionRequest.NameEnum} name
 */
ArcProviderConnectionRequest.prototype['name'] = undefined;

/**
 * The Bedrock model identifiers this connection is allowed to use.
 * @member {Array.<String>} models
 */
ArcProviderConnectionRequest.prototype['models'] = undefined;

/**
 * The base URL of the provider's API. Must be an absolute `http` or `https` URL and must not end in `/v1`.
 * @member {String} base_url
 */
ArcProviderConnectionRequest.prototype['base_url'] = undefined;

/**
 * The provider's secret API key.
 * @member {String} api_key
 */
ArcProviderConnectionRequest.prototype['api_key'] = undefined;

/**
 * The authentication type for this connection.
 * @member {module:model/ArcProviderConnectionRequest.AuthTypeEnum} auth_type
 */
ArcProviderConnectionRequest.prototype['auth_type'] = undefined;

/**
 * The ARN of the IAM role in your AWS account that AI Runtime Control assumes to access Bedrock. See [get Bedrock setup information](https://www.fastly.com/documentation/reference/api/ai-runtime-control/providers#arc-get-bedrock-setup) for the role ARN and external ID your trust policy must reference.
 * @member {String} customer_role_arn
 */
ArcProviderConnectionRequest.prototype['customer_role_arn'] = undefined;

/**
 * The AWS region for Bedrock API requests.
 * @member {String} region
 */
ArcProviderConnectionRequest.prototype['region'] = undefined;


// Implement ArcProviderConnectionApiKey interface:
/**
 * A display name for the provider connection. Cannot match a name reserved by a built-in provider.
 * @member {String} name
 */
ArcProviderConnectionApiKey.prototype['name'] = undefined;
/**
 * The AI model identifiers this connection is allowed to use.
 * @member {Array.<String>} models
 */
ArcProviderConnectionApiKey.prototype['models'] = undefined;
/**
 * The base URL of the provider's API. Must be an absolute `http` or `https` URL and must not end in `/v1`.
 * @member {String} base_url
 */
ArcProviderConnectionApiKey.prototype['base_url'] = undefined;
/**
 * The provider's secret API key.
 * @member {String} api_key
 */
ArcProviderConnectionApiKey.prototype['api_key'] = undefined;
/**
 * The authentication type for this connection. Omit for the default `api-key` behavior.
 * @member {module:model/ArcProviderConnectionApiKey.AuthTypeEnum} auth_type
 * @default 'api-key'
 */
ArcProviderConnectionApiKey.prototype['auth_type'] = undefined;
// Implement ArcProviderConnectionAwsIam interface:
/**
 * The provider name. Must be `bedrock` for `aws-iam` connections.
 * @member {module:model/ArcProviderConnectionAwsIam.NameEnum} name
 */
ArcProviderConnectionAwsIam.prototype['name'] = undefined;
/**
 * The Bedrock model identifiers this connection is allowed to use.
 * @member {Array.<String>} models
 */
ArcProviderConnectionAwsIam.prototype['models'] = undefined;
/**
 * The authentication type for this connection.
 * @member {module:model/ArcProviderConnectionAwsIam.AuthTypeEnum} auth_type
 */
ArcProviderConnectionAwsIam.prototype['auth_type'] = undefined;
/**
 * The ARN of the IAM role in your AWS account that AI Runtime Control assumes to access Bedrock. See [get Bedrock setup information](https://www.fastly.com/documentation/reference/api/ai-runtime-control/providers#arc-get-bedrock-setup) for the role ARN and external ID your trust policy must reference.
 * @member {String} customer_role_arn
 */
ArcProviderConnectionAwsIam.prototype['customer_role_arn'] = undefined;
/**
 * The AWS region for Bedrock API requests.
 * @member {String} region
 */
ArcProviderConnectionAwsIam.prototype['region'] = undefined;



/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
ArcProviderConnectionRequest['NameEnum'] = {

    /**
     * value: "bedrock"
     * @const
     */
    "bedrock": "bedrock"
};


/**
 * Allowed values for the <code>auth_type</code> property.
 * @enum {String}
 * @readonly
 */
ArcProviderConnectionRequest['AuthTypeEnum'] = {

    /**
     * value: "aws-iam"
     * @const
     */
    "aws-iam": "aws-iam"
};



export default ArcProviderConnectionRequest;

