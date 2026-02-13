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
import DdosProtectionEventAllOf from './DdosProtectionEventAllOf';
import TimestampsNoDelete from './TimestampsNoDelete';

/**
 * The DdosProtectionEvent model module.
 * @module model/DdosProtectionEvent
 * @version 15.0.0-beta.2
 */
class DdosProtectionEvent {
    /**
     * Constructs a new <code>DdosProtectionEvent</code>.
     * @alias module:model/DdosProtectionEvent
     * @implements module:model/TimestampsNoDelete
     * @implements module:model/DdosProtectionEventAllOf
     */
    constructor() { 
        TimestampsNoDelete.initialize(this);DdosProtectionEventAllOf.initialize(this);
        DdosProtectionEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DdosProtectionEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DdosProtectionEvent} obj Optional instance to populate.
     * @return {module:model/DdosProtectionEvent} The populated <code>DdosProtectionEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DdosProtectionEvent();
            TimestampsNoDelete.constructFromObject(data, obj);
            DdosProtectionEventAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('requests_allowed')) {
                obj['requests_allowed'] = ApiClient.convertToType(data['requests_allowed'], 'Number');
            }
            if (data.hasOwnProperty('requests_detected')) {
                obj['requests_detected'] = ApiClient.convertToType(data['requests_detected'], 'Number');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
            }
            if (data.hasOwnProperty('ended_at')) {
                obj['ended_at'] = ApiClient.convertToType(data['ended_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
DdosProtectionEvent.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
DdosProtectionEvent.prototype['updated_at'] = undefined;

/**
 * Unique ID of the event.
 * @member {String} id
 */
DdosProtectionEvent.prototype['id'] = undefined;

/**
 * A human-readable name for the event.
 * @member {String} name
 */
DdosProtectionEvent.prototype['name'] = undefined;

/**
 * Number of requests classified as non-attack traffic for an event.
 * @member {Number} requests_allowed
 */
DdosProtectionEvent.prototype['requests_allowed'] = undefined;

/**
 * Number of requests classified as DDoS attack traffic for an event.
 * @member {Number} requests_detected
 */
DdosProtectionEvent.prototype['requests_detected'] = undefined;

/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
DdosProtectionEvent.prototype['customer_id'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
DdosProtectionEvent.prototype['service_id'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} started_at
 */
DdosProtectionEvent.prototype['started_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} ended_at
 */
DdosProtectionEvent.prototype['ended_at'] = undefined;


// Implement TimestampsNoDelete interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TimestampsNoDelete.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TimestampsNoDelete.prototype['updated_at'] = undefined;
// Implement DdosProtectionEventAllOf interface:
/**
 * Unique ID of the event.
 * @member {String} id
 */
DdosProtectionEventAllOf.prototype['id'] = undefined;
/**
 * A human-readable name for the event.
 * @member {String} name
 */
DdosProtectionEventAllOf.prototype['name'] = undefined;
/**
 * Number of requests classified as non-attack traffic for an event.
 * @member {Number} requests_allowed
 */
DdosProtectionEventAllOf.prototype['requests_allowed'] = undefined;
/**
 * Number of requests classified as DDoS attack traffic for an event.
 * @member {Number} requests_detected
 */
DdosProtectionEventAllOf.prototype['requests_detected'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
DdosProtectionEventAllOf.prototype['customer_id'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
DdosProtectionEventAllOf.prototype['service_id'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} started_at
 */
DdosProtectionEventAllOf.prototype['started_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} ended_at
 */
DdosProtectionEventAllOf.prototype['ended_at'] = undefined;




export default DdosProtectionEvent;

