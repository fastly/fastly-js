"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceInvitationDataAttributes model module.
 * @module model/ServiceInvitationDataAttributes
 * @version 3.0.0-alpha1
 */
var ServiceInvitationDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceInvitationDataAttributes</code>.
   * @alias module:model/ServiceInvitationDataAttributes
   */
  function ServiceInvitationDataAttributes() {
    _classCallCheck(this, ServiceInvitationDataAttributes);

    ServiceInvitationDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceInvitationDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceInvitationDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceInvitationDataAttributes} obj Optional instance to populate.
     * @return {module:model/ServiceInvitationDataAttributes} The populated <code>ServiceInvitationDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceInvitationDataAttributes();

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ServiceInvitationDataAttributes;
}();
/**
 * The permission the accepting user will have in relation to the service.
 * @member {module:model/ServiceInvitationDataAttributes.PermissionEnum} permission
 * @default 'full'
 */


ServiceInvitationDataAttributes.prototype['permission'] = undefined;
/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */

ServiceInvitationDataAttributes['PermissionEnum'] = {
  /**
   * value: "full"
   * @const
   */
  "full": "full",

  /**
   * value: "read_only"
   * @const
   */
  "read_only": "read_only",

  /**
   * value: "purge_select"
   * @const
   */
  "purge_select": "purge_select",

  /**
   * value: "purge_all"
   * @const
   */
  "purge_all": "purge_all"
};
var _default = ServiceInvitationDataAttributes;
exports["default"] = _default;