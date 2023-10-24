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
 * The SchemasVersion model module.
 * @module model/SchemasVersion
 * @version 6.2.0
 */
class SchemasVersion {
    /**
     * Constructs a new <code>SchemasVersion</code>.
     * @alias module:model/SchemasVersion
     */
    constructor() { 
        
        SchemasVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasVersion} obj Optional instance to populate.
     * @return {module:model/SchemasVersion} The populated <code>SchemasVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasVersion();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('deployed')) {
                obj['deployed'] = ApiClient.convertToType(data['deployed'], 'Boolean');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('staging')) {
                obj['staging'] = ApiClient.convertToType(data['staging'], 'Boolean');
            }
            if (data.hasOwnProperty('testing')) {
                obj['testing'] = ApiClient.convertToType(data['testing'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */
SchemasVersion.prototype['active'] = false;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
SchemasVersion.prototype['comment'] = undefined;

/**
 * Unused at this time.
 * @member {Boolean} deployed
 */
SchemasVersion.prototype['deployed'] = undefined;

/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */
SchemasVersion.prototype['locked'] = false;

/**
 * The number of this version.
 * @member {Number} number
 */
SchemasVersion.prototype['number'] = undefined;

/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */
SchemasVersion.prototype['staging'] = false;

/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */
SchemasVersion.prototype['testing'] = false;






export default SchemasVersion;

