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
 * The AgentKey model module.
 * @module model/AgentKey
 * @version 16.0.0
 */
class AgentKey {
    /**
     * Constructs a new <code>AgentKey</code>.
     * An agent key used for configuring a Next-Gen WAF agent.
     * @alias module:model/AgentKey
     * @param access_key {String} Agent configuration access key value.
     * @param secret_key {String} Agent configuration secret key value.
     * @param is_primary {Boolean} Whether the agent key is the primary key that should be used to configure the agent.
     * @param created_at {Date} Date and time the agent key was created.
     * @param updated_at {Date} Date and time the agent key was last updated.
     */
    constructor(access_key, secret_key, is_primary, created_at, updated_at) { 
        
        AgentKey.initialize(this, access_key, secret_key, is_primary, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, access_key, secret_key, is_primary, created_at, updated_at) { 
        obj['access_key'] = access_key;
        obj['secret_key'] = secret_key;
        obj['is_primary'] = is_primary;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>AgentKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AgentKey} obj Optional instance to populate.
     * @return {module:model/AgentKey} The populated <code>AgentKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AgentKey();

            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('is_primary')) {
                obj['is_primary'] = ApiClient.convertToType(data['is_primary'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Agent configuration access key value.
 * @member {String} access_key
 */
AgentKey.prototype['access_key'] = undefined;

/**
 * Agent configuration secret key value.
 * @member {String} secret_key
 */
AgentKey.prototype['secret_key'] = undefined;

/**
 * Whether the agent key is the primary key that should be used to configure the agent.
 * @member {Boolean} is_primary
 */
AgentKey.prototype['is_primary'] = undefined;

/**
 * Date and time the agent key was created.
 * @member {Date} created_at
 */
AgentKey.prototype['created_at'] = undefined;

/**
 * Date and time the agent key was last updated.
 * @member {Date} updated_at
 */
AgentKey.prototype['updated_at'] = undefined;






export default AgentKey;

