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

import ApiClient from '../ApiClient';

/**
 * The TlsSubscriptionResponseAttributesAllOf model module.
 * @module model/TlsSubscriptionResponseAttributesAllOf
 * @version 3.2.0
 */
class TlsSubscriptionResponseAttributesAllOf {
    /**
     * Constructs a new <code>TlsSubscriptionResponseAttributesAllOf</code>.
     * @alias module:model/TlsSubscriptionResponseAttributesAllOf
     */
    constructor() { 
        
        TlsSubscriptionResponseAttributesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsSubscriptionResponseAttributesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionResponseAttributesAllOf} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionResponseAttributesAllOf} The populated <code>TlsSubscriptionResponseAttributesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsSubscriptionResponseAttributesAllOf();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The current state of your subscription.
 * @member {module:model/TlsSubscriptionResponseAttributesAllOf.StateEnum} state
 */
TlsSubscriptionResponseAttributesAllOf.prototype['state'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
TlsSubscriptionResponseAttributesAllOf['StateEnum'] = {

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "processing"
     * @const
     */
    "processing": "processing",

    /**
     * value: "issued"
     * @const
     */
    "issued": "issued",

    /**
     * value: "renewing"
     * @const
     */
    "renewing": "renewing",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed"
};



export default TlsSubscriptionResponseAttributesAllOf;

