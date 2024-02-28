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
import SnippetResponseCommon from './SnippetResponseCommon';
import SnippetWithDynamicNumber from './SnippetWithDynamicNumber';

/**
 * The SnippetResponsePost model module.
 * @module model/SnippetResponsePost
 * @version 7.1.0
 */
class SnippetResponsePost {
    /**
     * Constructs a new <code>SnippetResponsePost</code>.
     * @alias module:model/SnippetResponsePost
     * @implements module:model/SnippetWithDynamicNumber
     * @implements module:model/SnippetResponseCommon
     */
    constructor() { 
        SnippetWithDynamicNumber.initialize(this);SnippetResponseCommon.initialize(this);
        SnippetResponsePost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SnippetResponsePost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetResponsePost} obj Optional instance to populate.
     * @return {module:model/SnippetResponsePost} The populated <code>SnippetResponsePost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SnippetResponsePost();
            SnippetWithDynamicNumber.constructFromObject(data, obj);
            SnippetResponseCommon.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('dynamic')) {
                obj['dynamic'] = ApiClient.convertToType(data['dynamic'], 'Number');
            }
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
 * The name for the snippet.
 * @member {String} name
 */
SnippetResponsePost.prototype['name'] = undefined;

/**
 * The location in generated VCL where the snippet should be placed.
 * @member {module:model/SnippetResponsePost.TypeEnum} type
 */
SnippetResponsePost.prototype['type'] = undefined;

/**
 * The VCL code that specifies exactly what the snippet does.
 * @member {String} content
 */
SnippetResponsePost.prototype['content'] = undefined;

/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
SnippetResponsePost.prototype['priority'] = '100';

/**
 * Sets the snippet version.
 * @member {module:model/SnippetResponsePost.DynamicEnum} dynamic
 */
SnippetResponsePost.prototype['dynamic'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SnippetResponsePost.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
SnippetResponsePost.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
SnippetResponsePost.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
SnippetResponsePost.prototype['service_id'] = undefined;

/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
SnippetResponsePost.prototype['version'] = undefined;

/**
 * @member {String} id
 */
SnippetResponsePost.prototype['id'] = undefined;


// Implement SnippetWithDynamicNumber interface:
/**
 * The name for the snippet.
 * @member {String} name
 */
SnippetWithDynamicNumber.prototype['name'] = undefined;
/**
 * The location in generated VCL where the snippet should be placed.
 * @member {module:model/SnippetWithDynamicNumber.TypeEnum} type
 */
SnippetWithDynamicNumber.prototype['type'] = undefined;
/**
 * The VCL code that specifies exactly what the snippet does.
 * @member {String} content
 */
SnippetWithDynamicNumber.prototype['content'] = undefined;
/**
 * Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */
SnippetWithDynamicNumber.prototype['priority'] = '100';
/**
 * Sets the snippet version.
 * @member {module:model/SnippetWithDynamicNumber.DynamicEnum} dynamic
 */
SnippetWithDynamicNumber.prototype['dynamic'] = undefined;
// Implement SnippetResponseCommon interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SnippetResponseCommon.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
SnippetResponseCommon.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
SnippetResponseCommon.prototype['updated_at'] = undefined;
/**
 * @member {String} service_id
 */
SnippetResponseCommon.prototype['service_id'] = undefined;
/**
 * String representing the number identifying a version of the service.
 * @member {String} version
 */
SnippetResponseCommon.prototype['version'] = undefined;
/**
 * @member {String} id
 */
SnippetResponseCommon.prototype['id'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SnippetResponsePost['TypeEnum'] = {

    /**
     * value: "init"
     * @const
     */
    "init": "init",

    /**
     * value: "recv"
     * @const
     */
    "recv": "recv",

    /**
     * value: "hash"
     * @const
     */
    "hash": "hash",

    /**
     * value: "hit"
     * @const
     */
    "hit": "hit",

    /**
     * value: "miss"
     * @const
     */
    "miss": "miss",

    /**
     * value: "pass"
     * @const
     */
    "pass": "pass",

    /**
     * value: "fetch"
     * @const
     */
    "fetch": "fetch",

    /**
     * value: "error"
     * @const
     */
    "error": "error",

    /**
     * value: "deliver"
     * @const
     */
    "deliver": "deliver",

    /**
     * value: "log"
     * @const
     */
    "log": "log",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};


/**
 * Allowed values for the <code>dynamic</code> property.
 * @enum {Number}
 * @readonly
 */
SnippetResponsePost['DynamicEnum'] = {

    /**
     * value: 0
     * @const
     */
    "regular": 0,

    /**
     * value: 1
     * @const
     */
    "dynamic": 1
};



export default SnippetResponsePost;

