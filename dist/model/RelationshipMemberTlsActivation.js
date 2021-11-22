"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeTlsActivation = _interopRequireDefault(require("./TypeTlsActivation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipMemberTlsActivation model module.
 * @module model/RelationshipMemberTlsActivation
 * @version 3.0.0-alpha1
 */
var RelationshipMemberTlsActivation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipMemberTlsActivation</code>.
   * @alias module:model/RelationshipMemberTlsActivation
   */
  function RelationshipMemberTlsActivation() {
    _classCallCheck(this, RelationshipMemberTlsActivation);

    RelationshipMemberTlsActivation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipMemberTlsActivation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipMemberTlsActivation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipMemberTlsActivation} obj Optional instance to populate.
     * @return {module:model/RelationshipMemberTlsActivation} The populated <code>RelationshipMemberTlsActivation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipMemberTlsActivation();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsActivation["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RelationshipMemberTlsActivation;
}();
/**
 * @member {module:model/TypeTlsActivation} type
 */


RelationshipMemberTlsActivation.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a TLS activation.
 * @member {String} id
 */

RelationshipMemberTlsActivation.prototype['id'] = undefined;
var _default = RelationshipMemberTlsActivation;
exports["default"] = _default;