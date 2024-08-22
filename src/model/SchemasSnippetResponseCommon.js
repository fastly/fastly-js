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
import SnippetResponseCommonAllOf from './SnippetResponseCommonAllOf';
import Timestamps from './Timestamps';

/**
 * The SchemasSnippetResponseCommon model module.
 * @module model/SchemasSnippetResponseCommon
 * @version 7.8.0
 */
class SchemasSnippetResponseCommon {
    /**
     * Constructs a new <code>SchemasSnippetResponseCommon</code>.
     * @alias module:model/SchemasSnippetResponseCommon
     * @implements module:model/Timestamps
     * @implements module:model/SnippetResponseCommonAllOf
     */
    constructor() { 
        Timestamps.initialize(this);SnippetResponseCommonAllOf.initialize(this);
        SchemasSnippetResponseCommon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasSnippetResponseCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasSnippetResponseCommon} obj Optional instance to populate.
     * @return {module:model/SchemasSnippetResponseCommon} The populated <code>SchemasSnippetResponseCommon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasSnippetResponseCommon();
            Timestamps.constructFromObject(data, obj);
            SnippetResponseCommonAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SchemasSnippetResponseCommon.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
SchemasSnippetResponseCommon.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
SchemasSnippetResponseCommon.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
SchemasSnippetResponseCommon.prototype['service_id'] = undefined;

/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
SchemasSnippetResponseCommon.prototype['version'] = undefined;

/**
 * @member {String} id
 */
SchemasSnippetResponseCommon.prototype['id'] = undefined;


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
// Implement SnippetResponseCommonAllOf interface:
/**
 * @member {String} service_id
 */
SnippetResponseCommonAllOf.prototype['service_id'] = undefined;
/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
SnippetResponseCommonAllOf.prototype['version'] = undefined;
/**
 * @member {String} id
 */
SnippetResponseCommonAllOf.prototype['id'] = undefined;




export default SchemasSnippetResponseCommon;

