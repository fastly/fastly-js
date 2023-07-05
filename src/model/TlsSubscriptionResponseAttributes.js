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
import Timestamps from './Timestamps';
import TlsSubscriptionResponseAttributesAllOf from './TlsSubscriptionResponseAttributesAllOf';

/**
 * The TlsSubscriptionResponseAttributes model module.
 * @module model/TlsSubscriptionResponseAttributes
 * @version 4.4.0
 */
class TlsSubscriptionResponseAttributes {
    /**
     * Constructs a new <code>TlsSubscriptionResponseAttributes</code>.
     * @alias module:model/TlsSubscriptionResponseAttributes
     * @implements module:model/Timestamps
     * @implements module:model/TlsSubscriptionResponseAttributesAllOf
     */
    constructor() { 
        Timestamps.initialize(this);TlsSubscriptionResponseAttributesAllOf.initialize(this);
        TlsSubscriptionResponseAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsSubscriptionResponseAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionResponseAttributes} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionResponseAttributes} The populated <code>TlsSubscriptionResponseAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsSubscriptionResponseAttributes();
            Timestamps.constructFromObject(data, obj);
            TlsSubscriptionResponseAttributesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TlsSubscriptionResponseAttributes.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
TlsSubscriptionResponseAttributes.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TlsSubscriptionResponseAttributes.prototype['updated_at'] = undefined;

/**
 * The current state of your subscription.
 * @member {module:model/TlsSubscriptionResponseAttributes.StateEnum} state
 */
TlsSubscriptionResponseAttributes.prototype['state'] = undefined;


// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement TlsSubscriptionResponseAttributesAllOf interface:
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
TlsSubscriptionResponseAttributes['StateEnum'] = {

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



export default TlsSubscriptionResponseAttributes;

