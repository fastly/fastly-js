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
import Contact from './Contact';
import ContactResponseAllOf from './ContactResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The SchemasContactResponse model module.
 * @module model/SchemasContactResponse
 * @version 12.1.0
 */
class SchemasContactResponse {
    /**
     * Constructs a new <code>SchemasContactResponse</code>.
     * @alias module:model/SchemasContactResponse
     * @implements module:model/Contact
     * @implements module:model/Timestamps
     * @implements module:model/ContactResponseAllOf
     */
    constructor() { 
        Contact.initialize(this);Timestamps.initialize(this);ContactResponseAllOf.initialize(this);
        SchemasContactResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasContactResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasContactResponse} obj Optional instance to populate.
     * @return {module:model/SchemasContactResponse} The populated <code>SchemasContactResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasContactResponse();
            Contact.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ContactResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('contact_type')) {
                obj['contact_type'] = ApiClient.convertToType(data['contact_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The alphanumeric string representing the user for this customer contact.
 * @member {String} user_id
 */
SchemasContactResponse.prototype['user_id'] = undefined;

/**
 * The type of contact.
 * @member {module:model/SchemasContactResponse.ContactTypeEnum} contact_type
 */
SchemasContactResponse.prototype['contact_type'] = undefined;

/**
 * The name of this contact, when user_id is not provided.
 * @member {String} name
 */
SchemasContactResponse.prototype['name'] = undefined;

/**
 * The email of this contact, when a user_id is not provided.
 * @member {String} email
 */
SchemasContactResponse.prototype['email'] = undefined;

/**
 * The phone number for this contact. Required for primary, technical, and security contact types.
 * @member {String} phone
 */
SchemasContactResponse.prototype['phone'] = undefined;

/**
 * The alphanumeric string representing the customer for this customer contact.
 * @member {String} customer_id
 */
SchemasContactResponse.prototype['customer_id'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
SchemasContactResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
SchemasContactResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
SchemasContactResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} id
 */
SchemasContactResponse.prototype['id'] = undefined;


// Implement Contact interface:
/**
 * The alphanumeric string representing the user for this customer contact.
 * @member {String} user_id
 */
Contact.prototype['user_id'] = undefined;
/**
 * The type of contact.
 * @member {module:model/Contact.ContactTypeEnum} contact_type
 */
Contact.prototype['contact_type'] = undefined;
/**
 * The name of this contact, when user_id is not provided.
 * @member {String} name
 */
Contact.prototype['name'] = undefined;
/**
 * The email of this contact, when a user_id is not provided.
 * @member {String} email
 */
Contact.prototype['email'] = undefined;
/**
 * The phone number for this contact. Required for primary, technical, and security contact types.
 * @member {String} phone
 */
Contact.prototype['phone'] = undefined;
/**
 * The alphanumeric string representing the customer for this customer contact.
 * @member {String} customer_id
 */
Contact.prototype['customer_id'] = undefined;
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
// Implement ContactResponseAllOf interface:
/**
 * @member {String} id
 */
ContactResponseAllOf.prototype['id'] = undefined;



/**
 * Allowed values for the <code>contact_type</code> property.
 * @enum {String}
 * @readonly
 */
SchemasContactResponse['ContactTypeEnum'] = {

    /**
     * value: "primary"
     * @const
     */
    "primary": "primary",

    /**
     * value: "billing"
     * @const
     */
    "billing": "billing",

    /**
     * value: "technical"
     * @const
     */
    "technical": "technical",

    /**
     * value: "security"
     * @const
     */
    "security": "security",

    /**
     * value: "emergency"
     * @const
     */
    "emergency": "emergency",

    /**
     * value: "general compliance"
     * @const
     */
    "general compliance": "general compliance"
};



export default SchemasContactResponse;

