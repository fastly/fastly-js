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
import SchemasVersionResponse from './SchemasVersionResponse';
import ServiceCreate from './ServiceCreate';
import ServiceListResponseAllOf from './ServiceListResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The ServiceListResponse model module.
 * @module model/ServiceListResponse
 * @version 7.0.0
 */
class ServiceListResponse {
    /**
     * Constructs a new <code>ServiceListResponse</code>.
     * @alias module:model/ServiceListResponse
     * @implements module:model/Timestamps
     * @implements module:model/ServiceCreate
     * @implements module:model/ServiceListResponseAllOf
     */
    constructor() { 
        Timestamps.initialize(this);ServiceCreate.initialize(this);ServiceListResponseAllOf.initialize(this);
        ServiceListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceListResponse} obj Optional instance to populate.
     * @return {module:model/ServiceListResponse} The populated <code>ServiceListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceListResponse();
            Timestamps.constructFromObject(data, obj);
            ServiceCreate.constructFromObject(data, obj);
            ServiceListResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('versions')) {
                obj['versions'] = ApiClient.convertToType(data['versions'], [SchemasVersionResponse]);
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
ServiceListResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
ServiceListResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
ServiceListResponse.prototype['updated_at'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
ServiceListResponse.prototype['comment'] = undefined;

/**
 * The name of the service.
 * @member {String} name
 */
ServiceListResponse.prototype['name'] = undefined;

/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
ServiceListResponse.prototype['customer_id'] = undefined;

/**
 * The type of this service.
 * @member {module:model/ServiceListResponse.TypeEnum} type
 */
ServiceListResponse.prototype['type'] = undefined;

/**
 * @member {String} id
 */
ServiceListResponse.prototype['id'] = undefined;

/**
 * Current [version](/reference/api/services/version/) of the service.
 * @member {Number} version
 */
ServiceListResponse.prototype['version'] = undefined;

/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */
ServiceListResponse.prototype['versions'] = undefined;


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
// Implement ServiceCreate interface:
/**
 * A freeform descriptive note.
 * @member {String} comment
 */
ServiceCreate.prototype['comment'] = undefined;
/**
 * The name of the service.
 * @member {String} name
 */
ServiceCreate.prototype['name'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
ServiceCreate.prototype['customer_id'] = undefined;
/**
 * The type of this service.
 * @member {module:model/ServiceCreate.TypeEnum} type
 */
ServiceCreate.prototype['type'] = undefined;
// Implement ServiceListResponseAllOf interface:
/**
 * @member {String} id
 */
ServiceListResponseAllOf.prototype['id'] = undefined;
/**
 * Current [version](/reference/api/services/version/) of the service.
 * @member {Number} version
 */
ServiceListResponseAllOf.prototype['version'] = undefined;
/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */
ServiceListResponseAllOf.prototype['versions'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ServiceListResponse['TypeEnum'] = {

    /**
     * value: "vcl"
     * @const
     */
    "vcl": "vcl",

    /**
     * value: "wasm"
     * @const
     */
    "wasm": "wasm"
};



export default ServiceListResponse;

