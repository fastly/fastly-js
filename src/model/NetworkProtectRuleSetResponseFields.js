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
 * The NetworkProtectRuleSetResponseFields model module.
 * @module model/NetworkProtectRuleSetResponseFields
 * @version 17.0.0
 */
class NetworkProtectRuleSetResponseFields {
    /**
     * Constructs a new <code>NetworkProtectRuleSetResponseFields</code>.
     * Read-only fields and required fields in a rule-set response.
     * @alias module:model/NetworkProtectRuleSetResponseFields
     * @param id {String} A read-only unique identifier for a Network Protect resource.
     * @param created_at {Date} An ISO 8601 timestamp in UTC.
     * @param updated_at {Date} An ISO 8601 timestamp in UTC.
     */
    constructor(id, created_at, updated_at) { 
        
        NetworkProtectRuleSetResponseFields.initialize(this, id, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created_at, updated_at) { 
        obj['id'] = id;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>NetworkProtectRuleSetResponseFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRuleSetResponseFields} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRuleSetResponseFields} The populated <code>NetworkProtectRuleSetResponseFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRuleSetResponseFields();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
 * A read-only unique identifier for a Network Protect resource.
 * @member {String} id
 */
NetworkProtectRuleSetResponseFields.prototype['id'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectRuleSetResponseFields.prototype['created_at'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectRuleSetResponseFields.prototype['updated_at'] = undefined;






export default NetworkProtectRuleSetResponseFields;

