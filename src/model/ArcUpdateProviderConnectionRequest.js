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

/**
 * The ArcUpdateProviderConnectionRequest model module.
 * @module model/ArcUpdateProviderConnectionRequest
 * @version 17.0.0
 */
class ArcUpdateProviderConnectionRequest {
    /**
     * Constructs a new <code>ArcUpdateProviderConnectionRequest</code>.
     * A partial update to a provider connection. Only the fields you include are changed. &#x60;models&#x60;, &#x60;base_url&#x60;, and &#x60;api_key&#x60; apply to &#x60;api-key&#x60; connections; &#x60;customer_role_arn&#x60; and &#x60;region&#x60; apply to &#x60;aws-iam&#x60; connections. 
     * @alias module:model/ArcUpdateProviderConnectionRequest
     */
    constructor() { 
        
        ArcUpdateProviderConnectionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ArcUpdateProviderConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcUpdateProviderConnectionRequest} obj Optional instance to populate.
     * @return {module:model/ArcUpdateProviderConnectionRequest} The populated <code>ArcUpdateProviderConnectionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcUpdateProviderConnectionRequest();

            if (data.hasOwnProperty('models')) {
                obj['models'] = ApiClient.convertToType(data['models'], ['String']);
            }
            if (data.hasOwnProperty('base_url')) {
                obj['base_url'] = ApiClient.convertToType(data['base_url'], 'String');
            }
            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
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
 * The AI model identifiers this connection is allowed to use. Must be non-empty if included.
 * @member {Array.<String>} models
 */
ArcUpdateProviderConnectionRequest.prototype['models'] = undefined;

/**
 * The base URL of the provider's API (`api-key` connections only).
 * @member {String} base_url
 */
ArcUpdateProviderConnectionRequest.prototype['base_url'] = undefined;

/**
 * The provider's secret API key (`api-key` connections only).
 * @member {String} api_key
 */
ArcUpdateProviderConnectionRequest.prototype['api_key'] = undefined;

/**
 * The ARN of the IAM role to assume for Bedrock requests (`aws-iam` connections only).
 * @member {String} customer_role_arn
 */
ArcUpdateProviderConnectionRequest.prototype['customer_role_arn'] = undefined;

/**
 * The AWS region for Bedrock API requests (`aws-iam` connections only).
 * @member {String} region
 */
ArcUpdateProviderConnectionRequest.prototype['region'] = undefined;






export default ArcUpdateProviderConnectionRequest;

